"use strict";var du=Object.create;var tn=Object.defineProperty,_u=Object.defineProperties,lu=Object.getOwnPropertyDescriptor,uu=Object.getOwnPropertyDescriptors,fu=Object.getOwnPropertyNames,On=Object.getOwnPropertySymbols,gu=Object.getPrototypeOf,Jt=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable;var Ti=(o,e,t)=>e in o?tn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))Jt.call(e,t)&&Ti(o,t,e[t]);if(On)for(var t of On(e))xi.call(e,t)&&Ti(o,t,e[t]);return o},I=(o,e)=>_u(o,uu(e));var fe=(o,e)=>{var t={};for(var r in o)Jt.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&On)for(var r of On(o))e.indexOf(r)<0&&xi.call(o,r)&&(t[r]=o[r]);return t};var y=(o,e)=>()=>(o&&(e=o(o=0)),e);var b=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),W=(o,e)=>{for(var t in e)tn(o,t,{get:e[t],enumerable:!0})},yi=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of fu(e))!Jt.call(o,s)&&s!==t&&tn(o,s,{get:()=>e[s],enumerable:!(r=lu(e,s))||r.enumerable});return o};var h=(o,e,t)=>(t=o!=null?du(gu(o)):{},yi(e||!o||!o.__esModule?tn(t,"default",{value:o,enumerable:!0}):t,o)),O=o=>yi(tn({},"__esModule",{value:!0}),o);var S=(o,e,t)=>new Promise((r,s)=>{var p=_=>{try{d(t.next(_))}catch(l){s(l)}},m=_=>{try{d(t.throw(_))}catch(l){s(l)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(p,m);d((t=t.apply(o,e)).next())});var vi=b(Wn=>{"use strict";n();Wn.byteLength=Tu;Wn.toByteArray=yu;Wn.fromByteArray=vu;var be=[],de=[],hu=typeof Uint8Array!="undefined"?Uint8Array:Array,Qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(po=0,Si=Qt.length;po<Si;++po)be[po]=Qt[po],de[Qt.charCodeAt(po)]=po;var po,Si;de["-".charCodeAt(0)]=62;de["_".charCodeAt(0)]=63;function bi(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=o.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function Tu(o){var e=bi(o),t=e[0],r=e[1];return(t+r)*3/4-r}function xu(o,e,t){return(e+t)*3/4-t}function yu(o){var e,t=bi(o),r=t[0],s=t[1],p=new hu(xu(o,r,s)),m=0,d=s>0?r-4:r,_;for(_=0;_<d;_+=4)e=de[o.charCodeAt(_)]<<18|de[o.charCodeAt(_+1)]<<12|de[o.charCodeAt(_+2)]<<6|de[o.charCodeAt(_+3)],p[m++]=e>>16&255,p[m++]=e>>8&255,p[m++]=e&255;return s===2&&(e=de[o.charCodeAt(_)]<<2|de[o.charCodeAt(_+1)]>>4,p[m++]=e&255),s===1&&(e=de[o.charCodeAt(_)]<<10|de[o.charCodeAt(_+1)]<<4|de[o.charCodeAt(_+2)]>>2,p[m++]=e>>8&255,p[m++]=e&255),p}function Su(o){return be[o>>18&63]+be[o>>12&63]+be[o>>6&63]+be[o&63]}function bu(o,e,t){for(var r,s=[],p=e;p<t;p+=3)r=(o[p]<<16&16711680)+(o[p+1]<<8&65280)+(o[p+2]&255),s.push(Su(r));return s.join("")}function vu(o){for(var e,t=o.length,r=t%3,s=[],p=16383,m=0,d=t-r;m<d;m+=p)s.push(bu(o,m,m+p>d?d:m+p));return r===1?(e=o[t-1],s.push(be[e>>2]+be[e<<4&63]+"==")):r===2&&(e=(o[t-2]<<8)+o[t-1],s.push(be[e>>10]+be[e>>4&63]+be[e<<2&63]+"=")),s.join("")}});var wi=b(er=>{n();er.read=function(o,e,t,r,s){var p,m,d=s*8-r-1,_=(1<<d)-1,l=_>>1,f=-7,T=t?s-1:0,v=t?-1:1,A=o[e+T];for(T+=v,p=A&(1<<-f)-1,A>>=-f,f+=d;f>0;p=p*256+o[e+T],T+=v,f-=8);for(m=p&(1<<-f)-1,p>>=-f,f+=r;f>0;m=m*256+o[e+T],T+=v,f-=8);if(p===0)p=1-l;else{if(p===_)return m?NaN:(A?-1:1)*(1/0);m=m+Math.pow(2,r),p=p-l}return(A?-1:1)*m*Math.pow(2,p-r)};er.write=function(o,e,t,r,s,p){var m,d,_,l=p*8-s-1,f=(1<<l)-1,T=f>>1,v=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,A=r?0:p-1,x=r?1:-1,M=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,m=f):(m=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-m))<1&&(m--,_*=2),m+T>=1?e+=v/_:e+=v*Math.pow(2,1-T),e*_>=2&&(m++,_/=2),m+T>=f?(d=0,m=f):m+T>=1?(d=(e*_-1)*Math.pow(2,s),m=m+T):(d=e*Math.pow(2,T-1)*Math.pow(2,s),m=0));s>=8;o[t+A]=d&255,A+=x,d/=256,s-=8);for(m=m<<s|d,l+=s;l>0;o[t+A]=m&255,A+=x,m/=256,l-=8);o[t+A-x]|=M*128}});var Wi=b(Do=>{"use strict";n();var or=vi(),Lo=wi(),Ai=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Do.Buffer=u;Do.SlowBuffer=Du;Do.INSPECT_MAX_BYTES=50;var Fn=2147483647;Do.kMaxLength=Fn;u.TYPED_ARRAY_SUPPORT=wu();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function wu(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(t){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function Me(o){if(o>Fn)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,u.prototype),e}function u(o,e,t){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ar(o)}return Li(o,e,t)}u.poolSize=8192;function Li(o,e,t){if(typeof o=="string")return Iu(o,e);if(ArrayBuffer.isView(o))return ku(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(ve(o,ArrayBuffer)||o&&ve(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(ve(o,SharedArrayBuffer)||o&&ve(o.buffer,SharedArrayBuffer)))return tr(o,e,t);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=o.valueOf&&o.valueOf();if(r!=null&&r!==o)return u.from(r,e,t);var s=Lu(o);if(s)return s;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return u.from(o[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}u.from=function(o,e,t){return Li(o,e,t)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function Di(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Au(o,e,t){return Di(o),o<=0?Me(o):e!==void 0?typeof t=="string"?Me(o).fill(e,t):Me(o).fill(e):Me(o)}u.alloc=function(o,e,t){return Au(o,e,t)};function ar(o){return Di(o),Me(o<0?0:ir(o)|0)}u.allocUnsafe=function(o){return ar(o)};u.allocUnsafeSlow=function(o){return ar(o)};function Iu(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Ni(o,e)|0,r=Me(t),s=r.write(o,e);return s!==t&&(r=r.slice(0,s)),r}function nr(o){for(var e=o.length<0?0:ir(o.length)|0,t=Me(e),r=0;r<e;r+=1)t[r]=o[r]&255;return t}function ku(o){if(ve(o,Uint8Array)){var e=new Uint8Array(o);return tr(e.buffer,e.byteOffset,e.byteLength)}return nr(o)}function tr(o,e,t){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&t===void 0?r=new Uint8Array(o):t===void 0?r=new Uint8Array(o,e):r=new Uint8Array(o,e,t),Object.setPrototypeOf(r,u.prototype),r}function Lu(o){if(u.isBuffer(o)){var e=ir(o.length)|0,t=Me(e);return t.length===0||o.copy(t,0,0,e),t}if(o.length!==void 0)return typeof o.length!="number"||cr(o.length)?Me(0):nr(o);if(o.type==="Buffer"&&Array.isArray(o.data))return nr(o.data)}function ir(o){if(o>=Fn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Fn.toString(16)+" bytes");return o|0}function Du(o){return+o!=o&&(o=0),u.alloc(+o)}u.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==u.prototype};u.compare=function(e,t){if(ve(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),ve(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,s=t.length,p=0,m=Math.min(r,s);p<m;++p)if(e[p]!==t[p]){r=e[p],s=t[p];break}return r<s?-1:s<r?1:0};u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return u.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var s=u.allocUnsafe(t),p=0;for(r=0;r<e.length;++r){var m=e[r];if(ve(m,Uint8Array))p+m.length>s.length?u.from(m).copy(s,p):Uint8Array.prototype.set.call(s,m,p);else if(u.isBuffer(m))m.copy(s,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=m.length}return s};function Ni(o,e){if(u.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||ve(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var t=o.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var s=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return rr(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Oi(o).length;default:if(s)return r?-1:rr(o).length;e=(""+e).toLowerCase(),s=!0}}u.byteLength=Ni;function Nu(o,e,t){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Uu(this,e,t);case"utf8":case"utf-8":return Ei(this,e,t);case"ascii":return Fu(this,e,t);case"latin1":case"binary":return Bu(this,e,t);case"base64":return Ou(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Gu(this,e,t);default:if(r)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),r=!0}}u.prototype._isBuffer=!0;function mo(o,e,t){var r=o[e];o[e]=o[t],o[t]=r}u.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)mo(this,t,t+1);return this};u.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)mo(this,t,t+3),mo(this,t+1,t+2);return this};u.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)mo(this,t,t+7),mo(this,t+1,t+6),mo(this,t+2,t+5),mo(this,t+3,t+4);return this};u.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Ei(this,0,e):Nu.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:u.compare(this,e)===0};u.prototype.inspect=function(){var e="",t=Do.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Ai&&(u.prototype[Ai]=u.prototype.inspect);u.prototype.compare=function(e,t,r,s,p){if(ve(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),s===void 0&&(s=0),p===void 0&&(p=this.length),t<0||r>e.length||s<0||p>this.length)throw new RangeError("out of range index");if(s>=p&&t>=r)return 0;if(s>=p)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,s>>>=0,p>>>=0,this===e)return 0;for(var m=p-s,d=r-t,_=Math.min(m,d),l=this.slice(s,p),f=e.slice(t,r),T=0;T<_;++T)if(l[T]!==f[T]){m=l[T],d=f[T];break}return m<d?-1:d<m?1:0};function Ci(o,e,t,r,s){if(o.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,cr(t)&&(t=s?0:o.length-1),t<0&&(t=o.length+t),t>=o.length){if(s)return-1;t=o.length-1}else if(t<0)if(s)t=0;else return-1;if(typeof e=="string"&&(e=u.from(e,r)),u.isBuffer(e))return e.length===0?-1:Ii(o,e,t,r,s);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?s?Uint8Array.prototype.indexOf.call(o,e,t):Uint8Array.prototype.lastIndexOf.call(o,e,t):Ii(o,[e],t,r,s);throw new TypeError("val must be string, number or Buffer")}function Ii(o,e,t,r,s){var p=1,m=o.length,d=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(o.length<2||e.length<2)return-1;p=2,m/=2,d/=2,t/=2}function _(A,x){return p===1?A[x]:A.readUInt16BE(x*p)}var l;if(s){var f=-1;for(l=t;l<m;l++)if(_(o,l)===_(e,f===-1?0:l-f)){if(f===-1&&(f=l),l-f+1===d)return f*p}else f!==-1&&(l-=l-f),f=-1}else for(t+d>m&&(t=m-d),l=t;l>=0;l--){for(var T=!0,v=0;v<d;v++)if(_(o,l+v)!==_(e,v)){T=!1;break}if(T)return l}return-1}u.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1};u.prototype.indexOf=function(e,t,r){return Ci(this,e,t,r,!0)};u.prototype.lastIndexOf=function(e,t,r){return Ci(this,e,t,r,!1)};function Cu(o,e,t,r){t=Number(t)||0;var s=o.length-t;r?(r=Number(r),r>s&&(r=s)):r=s;var p=e.length;r>p/2&&(r=p/2);for(var m=0;m<r;++m){var d=parseInt(e.substr(m*2,2),16);if(cr(d))return m;o[t+m]=d}return m}function Eu(o,e,t,r){return Bn(rr(e,o.length-t),o,t,r)}function Pu(o,e,t,r){return Bn($u(e),o,t,r)}function Ru(o,e,t,r){return Bn(Oi(e),o,t,r)}function Mu(o,e,t,r){return Bn(qu(e,o.length-t),o,t,r)}u.prototype.write=function(e,t,r,s){if(t===void 0)s="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")s=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-t;if((r===void 0||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var m=!1;;)switch(s){case"hex":return Cu(this,e,t,r);case"utf8":case"utf-8":return Eu(this,e,t,r);case"ascii":case"latin1":case"binary":return Pu(this,e,t,r);case"base64":return Ru(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mu(this,e,t,r);default:if(m)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),m=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ou(o,e,t){return e===0&&t===o.length?or.fromByteArray(o):or.fromByteArray(o.slice(e,t))}function Ei(o,e,t){t=Math.min(o.length,t);for(var r=[],s=e;s<t;){var p=o[s],m=null,d=p>239?4:p>223?3:p>191?2:1;if(s+d<=t){var _,l,f,T;switch(d){case 1:p<128&&(m=p);break;case 2:_=o[s+1],(_&192)===128&&(T=(p&31)<<6|_&63,T>127&&(m=T));break;case 3:_=o[s+1],l=o[s+2],(_&192)===128&&(l&192)===128&&(T=(p&15)<<12|(_&63)<<6|l&63,T>2047&&(T<55296||T>57343)&&(m=T));break;case 4:_=o[s+1],l=o[s+2],f=o[s+3],(_&192)===128&&(l&192)===128&&(f&192)===128&&(T=(p&15)<<18|(_&63)<<12|(l&63)<<6|f&63,T>65535&&T<1114112&&(m=T))}}m===null?(m=65533,d=1):m>65535&&(m-=65536,r.push(m>>>10&1023|55296),m=56320|m&1023),r.push(m),s+=d}return Wu(r)}var ki=4096;function Wu(o){var e=o.length;if(e<=ki)return String.fromCharCode.apply(String,o);for(var t="",r=0;r<e;)t+=String.fromCharCode.apply(String,o.slice(r,r+=ki));return t}function Fu(o,e,t){var r="";t=Math.min(o.length,t);for(var s=e;s<t;++s)r+=String.fromCharCode(o[s]&127);return r}function Bu(o,e,t){var r="";t=Math.min(o.length,t);for(var s=e;s<t;++s)r+=String.fromCharCode(o[s]);return r}function Uu(o,e,t){var r=o.length;(!e||e<0)&&(e=0),(!t||t<0||t>r)&&(t=r);for(var s="",p=e;p<t;++p)s+=ju[o[p]];return s}function Gu(o,e,t){for(var r=o.slice(e,t),s="",p=0;p<r.length-1;p+=2)s+=String.fromCharCode(r[p]+r[p+1]*256);return s}u.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var s=this.subarray(e,t);return Object.setPrototypeOf(s,u.prototype),s};function z(o,e,t){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||z(e,t,this.length);for(var s=this[e],p=1,m=0;++m<t&&(p*=256);)s+=this[e+m]*p;return s};u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||z(e,t,this.length);for(var s=this[e+--t],p=1;t>0&&(p*=256);)s+=this[e+--t]*p;return s};u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e=e>>>0,t||z(e,1,this.length),this[e]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||z(e,2,this.length),this[e]|this[e+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||z(e,2,this.length),this[e]<<8|this[e+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||z(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};u.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||z(e,t,this.length);for(var s=this[e],p=1,m=0;++m<t&&(p*=256);)s+=this[e+m]*p;return p*=128,s>=p&&(s-=Math.pow(2,8*t)),s};u.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||z(e,t,this.length);for(var s=t,p=1,m=this[e+--s];s>0&&(p*=256);)m+=this[e+--s]*p;return p*=128,m>=p&&(m-=Math.pow(2,8*t)),m};u.prototype.readInt8=function(e,t){return e=e>>>0,t||z(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};u.prototype.readInt16LE=function(e,t){e=e>>>0,t||z(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};u.prototype.readInt16BE=function(e,t){e=e>>>0,t||z(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};u.prototype.readInt32LE=function(e,t){return e=e>>>0,t||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};u.prototype.readInt32BE=function(e,t){return e=e>>>0,t||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};u.prototype.readFloatLE=function(e,t){return e=e>>>0,t||z(e,4,this.length),Lo.read(this,e,!0,23,4)};u.prototype.readFloatBE=function(e,t){return e=e>>>0,t||z(e,4,this.length),Lo.read(this,e,!1,23,4)};u.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||z(e,8,this.length),Lo.read(this,e,!0,52,8)};u.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||z(e,8,this.length),Lo.read(this,e,!1,52,8)};function re(o,e,t,r,s,p){if(!u.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>s||e<p)throw new RangeError('"value" argument is out of bounds');if(t+r>o.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,r,s){if(e=+e,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;re(this,e,t,r,p,0)}var m=1,d=0;for(this[t]=e&255;++d<r&&(m*=256);)this[t+d]=e/m&255;return t+r};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,r,s){if(e=+e,t=t>>>0,r=r>>>0,!s){var p=Math.pow(2,8*r)-1;re(this,e,t,r,p,0)}var m=r-1,d=1;for(this[t+m]=e&255;--m>=0&&(d*=256);)this[t+m]=e/d&255;return t+r};u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,1,255,0),this[t]=e&255,t+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};u.prototype.writeIntLE=function(e,t,r,s){if(e=+e,t=t>>>0,!s){var p=Math.pow(2,8*r-1);re(this,e,t,r,p-1,-p)}var m=0,d=1,_=0;for(this[t]=e&255;++m<r&&(d*=256);)e<0&&_===0&&this[t+m-1]!==0&&(_=1),this[t+m]=(e/d>>0)-_&255;return t+r};u.prototype.writeIntBE=function(e,t,r,s){if(e=+e,t=t>>>0,!s){var p=Math.pow(2,8*r-1);re(this,e,t,r,p-1,-p)}var m=r-1,d=1,_=0;for(this[t+m]=e&255;--m>=0&&(d*=256);)e<0&&_===0&&this[t+m+1]!==0&&(_=1),this[t+m]=(e/d>>0)-_&255;return t+r};u.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};u.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};u.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};u.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};u.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||re(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Pi(o,e,t,r,s,p){if(t+r>o.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ri(o,e,t,r,s){return e=+e,t=t>>>0,s||Pi(o,e,t,4,34028234663852886e22,-34028234663852886e22),Lo.write(o,e,t,r,23,4),t+4}u.prototype.writeFloatLE=function(e,t,r){return Ri(this,e,t,!0,r)};u.prototype.writeFloatBE=function(e,t,r){return Ri(this,e,t,!1,r)};function Mi(o,e,t,r,s){return e=+e,t=t>>>0,s||Pi(o,e,t,8,17976931348623157e292,-17976931348623157e292),Lo.write(o,e,t,r,52,8),t+8}u.prototype.writeDoubleLE=function(e,t,r){return Mi(this,e,t,!0,r)};u.prototype.writeDoubleBE=function(e,t,r){return Mi(this,e,t,!1,r)};u.prototype.copy=function(e,t,r,s){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),t>=e.length&&(t=e.length),t||(t=0),s>0&&s<r&&(s=r),s===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-t<s-r&&(s=e.length-t+r);var p=s-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,s):Uint8Array.prototype.set.call(e,this.subarray(r,s),t),p};u.prototype.fill=function(e,t,r,s){if(typeof e=="string"){if(typeof t=="string"?(s=t,t=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!u.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(e.length===1){var p=e.charCodeAt(0);(s==="utf8"&&p<128||s==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var m;if(typeof e=="number")for(m=t;m<r;++m)this[m]=e;else{var d=u.isBuffer(e)?e:u.from(e,s),_=d.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<r-t;++m)this[m+t]=d[m%_]}return this};var Hu=/[^+/0-9A-Za-z-_]/g;function Vu(o){if(o=o.split("=")[0],o=o.trim().replace(Hu,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function rr(o,e){e=e||1/0;for(var t,r=o.length,s=null,p=[],m=0;m<r;++m){if(t=o.charCodeAt(m),t>55295&&t<57344){if(!s){if(t>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(m+1===r){(e-=3)>-1&&p.push(239,191,189);continue}s=t;continue}if(t<56320){(e-=3)>-1&&p.push(239,191,189),s=t;continue}t=(s-55296<<10|t-56320)+65536}else s&&(e-=3)>-1&&p.push(239,191,189);if(s=null,t<128){if((e-=1)<0)break;p.push(t)}else if(t<2048){if((e-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function $u(o){for(var e=[],t=0;t<o.length;++t)e.push(o.charCodeAt(t)&255);return e}function qu(o,e){for(var t,r,s,p=[],m=0;m<o.length&&!((e-=2)<0);++m)t=o.charCodeAt(m),r=t>>8,s=t%256,p.push(s),p.push(r);return p}function Oi(o){return or.toByteArray(Vu(o))}function Bn(o,e,t,r){for(var s=0;s<r&&!(s+t>=e.length||s>=o.length);++s)e[s+t]=o[s];return s}function ve(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function cr(o){return o!==o}var ju=function(){for(var o="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var r=t*16,s=0;s<16;++s)e[r+s]=o[t]+o[s];return e}()});var Hi=b((K0,Gi)=>{n();var V=Gi.exports={},we,Ae;function sr(){throw new Error("setTimeout has not been defined")}function pr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?we=setTimeout:we=sr}catch(o){we=sr}try{typeof clearTimeout=="function"?Ae=clearTimeout:Ae=pr}catch(o){Ae=pr}})();function Fi(o){if(we===setTimeout)return setTimeout(o,0);if((we===sr||!we)&&setTimeout)return we=setTimeout,setTimeout(o,0);try{return we(o,0)}catch(e){try{return we.call(null,o,0)}catch(t){return we.call(this,o,0)}}}function zu(o){if(Ae===clearTimeout)return clearTimeout(o);if((Ae===pr||!Ae)&&clearTimeout)return Ae=clearTimeout,clearTimeout(o);try{return Ae(o)}catch(e){try{return Ae.call(null,o)}catch(t){return Ae.call(this,o)}}}var Oe=[],No=!1,_o,Un=-1;function Ku(){!No||!_o||(No=!1,_o.length?Oe=_o.concat(Oe):Un=-1,Oe.length&&Bi())}function Bi(){if(!No){var o=Fi(Ku);No=!0;for(var e=Oe.length;e;){for(_o=Oe,Oe=[];++Un<e;)_o&&_o[Un].run();Un=-1,e=Oe.length}_o=null,No=!1,zu(o)}}V.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Oe.push(new Ui(o,e)),Oe.length===1&&!No&&Fi(Bi)};function Ui(o,e){this.fun=o,this.array=e}Ui.prototype.run=function(){this.fun.apply(null,this.array)};V.title="browser";V.browser=!0;V.env={};V.argv=[];V.version="";V.versions={};function We(){}V.on=We;V.addListener=We;V.once=We;V.off=We;V.removeListener=We;V.removeAllListeners=We;V.emit=We;V.prependListener=We;V.prependOnceListener=We;V.listeners=function(o){return[]};V.binding=function(o){throw new Error("process.binding is not supported")};V.cwd=function(){return"/"};V.chdir=function(o){throw new Error("process.chdir is not supported")};V.umask=function(){return 0}});var a,c,Xu,i,n=y(()=>{a=h(Wi()),c=h(Hi()),Xu=function(o){function e(){var r=this||self;return delete o.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object),i=Xu});var mr=y(()=>{"use strict";n()});var Ie=y(()=>{"use strict";n()});var Vi=y(()=>{"use strict";n()});var dr,$i=y(()=>{"use strict";n();dr=(r=>(r.SetGuardian="SetGuardian",r.GuardAccount="GuardAccount",r.UnGuardAccount="UnGuardAccount",r))(dr||{})});var qi=y(()=>{"use strict";n()});var _r=y(()=>{"use strict";n()});var ji=y(()=>{"use strict";n()});var lr=y(()=>{"use strict";n()});var zi=y(()=>{"use strict";n()});var Ki=y(()=>{"use strict";n()});var lo,Co,Xe=y(()=>{"use strict";n();lo=require("@multiversx/sdk-web-wallet-cross-window-provider/out/CrossWindowProvider/CrossWindowProvider"),Co=require("@multiversx/sdk-web-wallet-cross-window-provider/out/enums")});var Xi,iv,Yi,cv,F=y(()=>{"use strict";n();Xe();Xi=(t=>(t.signTransactionsWithGuardianResponse="SIGN_TRANSACTIONS_WITH_GUARDIAN_RESPONSE",t.reloginRequest="RELOGIN_REQUEST",t))(Xi||{}),iv=g(g({},Co.WindowProviderRequestEnums),Xi),Yi=(e=>(e.reloginResponse="RELOGIN_RESPONSE",e))(Yi||{}),cv=g(g({},Co.WindowProviderResponseEnums),Yi)});var Zi=y(()=>{"use strict";n()});var Ji=y(()=>{"use strict";n()});var ke,ae=y(()=>{"use strict";n();ke=(s=>(s.raw="raw",s.text="text",s.decimal="decimal",s.smart="smart",s))(ke||{})});var Qi=y(()=>{"use strict";n()});var ec=y(()=>{"use strict";n()});var oc=y(()=>{"use strict";n()});var B=y(()=>{"use strict";n();lr();zi();Ki();F();Zi();Ji();ae();Qi();ec();oc()});var Eo,nc,wv,tc,Av,rc,Iv,kv,Yu,Po=y(()=>{"use strict";n();B();Eo={devnet:{id:"devnet",chainId:"D",name:"Devnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://devnet-wallet.multiversx.com",xAliasAddress:"https://devnet.xalias.com",apiAddress:"https://devnet-api.multiversx.com",explorerAddress:"http://devnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://devnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},testnet:{id:"testnet",chainId:"T",name:"Testnet",egldLabel:"xEGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://testnet-wallet.multiversx.com",xAliasAddress:"https://testnet.xalias.com",apiAddress:"https://testnet-api.multiversx.com",explorerAddress:"http://testnet-explorer.multiversx.com",metamaskSnapWalletAddress:"https://testnet-iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3},mainnet:{id:"mainnet",chainId:"1",name:"Mainnet",egldLabel:"EGLD",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://xportal.com/",walletConnectBridgeAddresses:["https://bridge.walletconnect.org"],walletConnectV2RelayAddresses:["wss://relay.walletconnect.com"],walletAddress:"https://wallet.multiversx.com",xAliasAddress:"https://xalias.com",apiAddress:"https://api.multiversx.com",explorerAddress:"https://explorer.multiversx.com",metamaskSnapWalletAddress:"https://iframe-wallet.multiversx.com",apiTimeout:"4000",roundDuration:6e3}},{chainId:nc,egldLabel:wv}=Eo["devnet"],{chainId:tc,egldLabel:Av}=Eo["testnet"],{chainId:rc,egldLabel:Iv}=Eo["mainnet"],kv={["devnet"]:nc,["testnet"]:tc,["mainnet"]:rc},Yu={[nc]:"devnet",[tc]:"testnet",[rc]:"mainnet"}});var Gn=y(()=>{"use strict";n()});var Le,ac=y(()=>{"use strict";n();Le=require("@multiversx/sdk-web-wallet-provider")});var De,Ro=y(()=>{"use strict";n();De=require("@multiversx/sdk-dapp-utils/out/constants/browserConstants")});var ic,cc,ur,Pv,Rv,fr=y(()=>{"use strict";n();Ro();ur=String((cc=(ic=De.safeWindow)==null?void 0:ic.navigator)==null?void 0:cc.userAgent),Pv=/^((?!chrome|android).)*safari/i.test(ur),Rv=/firefox/i.test(ur)&&/windows/i.test(ur)});var gr,Hn,rn,hr,an,_e,uo,sc,Vn,pc,mc,le,dc,_c,k=y(()=>{"use strict";n();mr();Ie();Vi();$i();qi();_r();ji();Po();Gn();ac();fr();gr=.01,Hn=1500,rn=5e4,hr=5e4,an=1e9,_e=18,uo=4,sc=1,Vn="logout",pc="login",mc="N/A",le="0",dc="...",_c="EGLD-000000"});var Fe,fo=y(()=>{"use strict";n();Fe=()=>typeof window!="undefined"&&typeof(window==null?void 0:window.location)!="undefined"});var Tr={};W(Tr,{css:()=>uc,default:()=>Zu});var uc,Zu,xr=y(()=>{"use strict";n();uc=`.dapp-core-component__main__link-style {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uc));Zu={"link-style":"dapp-core-component__main__link-style",linkStyle:"dapp-core-component__main__link-style","link-second-style":"dapp-core-component__main__link-second-style",linkSecondStyle:"dapp-core-component__main__link-second-style",wrapper:"dapp-core-component__main__wrapper","opacity-6":"dapp-core-component__main__opacity-6",opacity6:"dapp-core-component__main__opacity-6","qr-code-svg-container":"dapp-core-component__main__qr-code-svg-container",qrCodeSvgContainer:"dapp-core-component__main__qr-code-svg-container","pair-list":"dapp-core-component__main__pair-list",pairList:"dapp-core-component__main__pair-list","pair-loader":"dapp-core-component__main__pair-loader",pairLoader:"dapp-core-component__main__pair-loader","pair-image":"dapp-core-component__main__pair-image",pairImage:"dapp-core-component__main__pair-image","pair-remove":"dapp-core-component__main__pair-remove",pairRemove:"dapp-core-component__main__pair-remove","dapp-icon":"dapp-core-component__main__dapp-icon",dappIcon:"dapp-core-component__main__dapp-icon","icon-medium":"dapp-core-component__main__icon-medium",iconMedium:"dapp-core-component__main__icon-medium",centering:"dapp-core-component__main__centering","border-n":"dapp-core-component__main__border-n",borderN:"dapp-core-component__main__border-n","t-shadow":"dapp-core-component__main__t-shadow",tShadow:"dapp-core-component__main__t-shadow",btn:"dapp-core-component__main__btn",media:"dapp-core-component__main__media","media-body":"dapp-core-component__main__media-body",mediaBody:"dapp-core-component__main__media-body","connect-btns":"dapp-core-component__main__connect-btns",connectBtns:"dapp-core-component__main__connect-btns",info:"dapp-core-component__main__info","trust-badge":"dapp-core-component__main__trust-badge",trustBadge:"dapp-core-component__main__trust-badge",navbar:"dapp-core-component__main__navbar","dapp-name":"dapp-core-component__main__dapp-name",dappName:"dapp-core-component__main__dapp-name","action-btn":"dapp-core-component__main__action-btn",actionBtn:"dapp-core-component__main__action-btn",transactions:"dapp-core-component__main__transactions","transaction-icon":"dapp-core-component__main__transaction-icon",transactionIcon:"dapp-core-component__main__transaction-icon",table:"dapp-core-component__main__table","page-state":"dapp-core-component__main__page-state",pageState:"dapp-core-component__main__page-state","lds-ellipsis":"dapp-core-component__main__lds-ellipsis",ldsEllipsis:"dapp-core-component__main__lds-ellipsis","bg-blue":"dapp-core-component__main__bg-blue",bgBlue:"dapp-core-component__main__bg-blue","lds-ellipsis1":"dapp-core-component__main__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__main__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__main__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__main__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__main__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__main__lds-ellipsis3",focus:"dapp-core-component__main__focus",disabled:"dapp-core-component__main__disabled","btn-primary":"dapp-core-component__main__btn-primary",btnPrimary:"dapp-core-component__main__btn-primary","btn-secondary":"dapp-core-component__main__btn-secondary",btnSecondary:"dapp-core-component__main__btn-secondary","btn-warning":"dapp-core-component__main__btn-warning",btnWarning:"dapp-core-component__main__btn-warning","btn-dark":"dapp-core-component__main__btn-dark",btnDark:"dapp-core-component__main__btn-dark","btn-link":"dapp-core-component__main__btn-link",btnLink:"dapp-core-component__main__btn-link","btn-light":"dapp-core-component__main__btn-light",btnLight:"dapp-core-component__main__btn-light",badge:"dapp-core-component__main__badge","badge-pill":"dapp-core-component__main__badge-pill",badgePill:"dapp-core-component__main__badge-pill","badge-primary":"dapp-core-component__main__badge-primary",badgePrimary:"dapp-core-component__main__badge-primary","badge-secondary":"dapp-core-component__main__badge-secondary",badgeSecondary:"dapp-core-component__main__badge-secondary","badge-success":"dapp-core-component__main__badge-success",badgeSuccess:"dapp-core-component__main__badge-success","badge-info":"dapp-core-component__main__badge-info",badgeInfo:"dapp-core-component__main__badge-info","badge-warning":"dapp-core-component__main__badge-warning",badgeWarning:"dapp-core-component__main__badge-warning","badge-danger":"dapp-core-component__main__badge-danger",badgeDanger:"dapp-core-component__main__badge-danger","badge-light":"dapp-core-component__main__badge-light",badgeLight:"dapp-core-component__main__badge-light","badge-dark":"dapp-core-component__main__badge-dark",badgeDark:"dapp-core-component__main__badge-dark",card:"dapp-core-component__main__card","list-group":"dapp-core-component__main__list-group",listGroup:"dapp-core-component__main__list-group","card-header":"dapp-core-component__main__card-header",cardHeader:"dapp-core-component__main__card-header","card-footer":"dapp-core-component__main__card-footer",cardFooter:"dapp-core-component__main__card-footer","card-header-item":"dapp-core-component__main__card-header-item",cardHeaderItem:"dapp-core-component__main__card-header-item",h6:"dapp-core-component__main__h6",compact:"dapp-core-component__main__compact","card-body":"dapp-core-component__main__card-body",cardBody:"dapp-core-component__main__card-body","card-title":"dapp-core-component__main__card-title",cardTitle:"dapp-core-component__main__card-title","card-subtitle":"dapp-core-component__main__card-subtitle",cardSubtitle:"dapp-core-component__main__card-subtitle","card-text":"dapp-core-component__main__card-text",cardText:"dapp-core-component__main__card-text","card-link":"dapp-core-component__main__card-link",cardLink:"dapp-core-component__main__card-link",text:"dapp-core-component__main__text","text-white":"dapp-core-component__main__text-white",textWhite:"dapp-core-component__main__text-white","text-monospace":"dapp-core-component__main__text-monospace",textMonospace:"dapp-core-component__main__text-monospace","trim-size-xl":"dapp-core-component__main__trim-size-xl",trimSizeXl:"dapp-core-component__main__trim-size-xl",trim:"dapp-core-component__main__trim","trim-only-sm":"dapp-core-component__main__trim-only-sm",trimOnlySm:"dapp-core-component__main__trim-only-sm","text-justify":"dapp-core-component__main__text-justify",textJustify:"dapp-core-component__main__text-justify","text-wrap":"dapp-core-component__main__text-wrap",textWrap:"dapp-core-component__main__text-wrap","text-nowrap":"dapp-core-component__main__text-nowrap",textNowrap:"dapp-core-component__main__text-nowrap","text-truncate":"dapp-core-component__main__text-truncate",textTruncate:"dapp-core-component__main__text-truncate","text-left":"dapp-core-component__main__text-left",textLeft:"dapp-core-component__main__text-left","text-right":"dapp-core-component__main__text-right",textRight:"dapp-core-component__main__text-right","text-center":"dapp-core-component__main__text-center",textCenter:"dapp-core-component__main__text-center","text-primary":"dapp-core-component__main__text-primary",textPrimary:"dapp-core-component__main__text-primary","text-secondary":"dapp-core-component__main__text-secondary",textSecondary:"dapp-core-component__main__text-secondary","text-primary-highlight":"dapp-core-component__main__text-primary-highlight",textPrimaryHighlight:"dapp-core-component__main__text-primary-highlight","text-muted":"dapp-core-component__main__text-muted",textMuted:"dapp-core-component__main__text-muted","text-success":"dapp-core-component__main__text-success",textSuccess:"dapp-core-component__main__text-success","text-body":"dapp-core-component__main__text-body",textBody:"dapp-core-component__main__text-body","text-black-50":"dapp-core-component__main__text-black-50",textBlack50:"dapp-core-component__main__text-black-50","text-white-50":"dapp-core-component__main__text-white-50",textWhite50:"dapp-core-component__main__text-white-50","text-lg-right":"dapp-core-component__main__text-lg-right",textLgRight:"dapp-core-component__main__text-lg-right","text-hide":"dapp-core-component__main__text-hide",textHide:"dapp-core-component__main__text-hide","text-decoration-none":"dapp-core-component__main__text-decoration-none",textDecorationNone:"dapp-core-component__main__text-decoration-none","text-break":"dapp-core-component__main__text-break",textBreak:"dapp-core-component__main__text-break","text-reset":"dapp-core-component__main__text-reset",textReset:"dapp-core-component__main__text-reset","text-lowercase":"dapp-core-component__main__text-lowercase",textLowercase:"dapp-core-component__main__text-lowercase","text-uppercase":"dapp-core-component__main__text-uppercase",textUppercase:"dapp-core-component__main__text-uppercase","text-capitalize":"dapp-core-component__main__text-capitalize",textCapitalize:"dapp-core-component__main__text-capitalize","text-danger":"dapp-core-component__main__text-danger",textDanger:"dapp-core-component__main__text-danger","text-warning":"dapp-core-component__main__text-warning",textWarning:"dapp-core-component__main__text-warning","trim-fs-sm":"dapp-core-component__main__trim-fs-sm",trimFsSm:"dapp-core-component__main__trim-fs-sm","mx-auto":"dapp-core-component__main__mx-auto",mxAuto:"dapp-core-component__main__mx-auto","m-0":"dapp-core-component__main__m-0",m0:"dapp-core-component__main__m-0","mt-0":"dapp-core-component__main__mt-0",mt0:"dapp-core-component__main__mt-0","my-0":"dapp-core-component__main__my-0",my0:"dapp-core-component__main__my-0","mr-0":"dapp-core-component__main__mr-0",mr0:"dapp-core-component__main__mr-0","mx-0":"dapp-core-component__main__mx-0",mx0:"dapp-core-component__main__mx-0","mb-0":"dapp-core-component__main__mb-0",mb0:"dapp-core-component__main__mb-0","ml-0":"dapp-core-component__main__ml-0",ml0:"dapp-core-component__main__ml-0","m-1":"dapp-core-component__main__m-1",m1:"dapp-core-component__main__m-1","mt-1":"dapp-core-component__main__mt-1",mt1:"dapp-core-component__main__mt-1","my-1":"dapp-core-component__main__my-1",my1:"dapp-core-component__main__my-1","mr-1":"dapp-core-component__main__mr-1",mr1:"dapp-core-component__main__mr-1","mx-1":"dapp-core-component__main__mx-1",mx1:"dapp-core-component__main__mx-1","mb-1":"dapp-core-component__main__mb-1",mb1:"dapp-core-component__main__mb-1","ml-1":"dapp-core-component__main__ml-1",ml1:"dapp-core-component__main__ml-1","m-2":"dapp-core-component__main__m-2",m2:"dapp-core-component__main__m-2","mt-2":"dapp-core-component__main__mt-2",mt2:"dapp-core-component__main__mt-2","my-2":"dapp-core-component__main__my-2",my2:"dapp-core-component__main__my-2","mr-2":"dapp-core-component__main__mr-2",mr2:"dapp-core-component__main__mr-2","mx-2":"dapp-core-component__main__mx-2",mx2:"dapp-core-component__main__mx-2","mb-2":"dapp-core-component__main__mb-2",mb2:"dapp-core-component__main__mb-2","ml-2":"dapp-core-component__main__ml-2",ml2:"dapp-core-component__main__ml-2","m-3":"dapp-core-component__main__m-3",m3:"dapp-core-component__main__m-3","mt-3":"dapp-core-component__main__mt-3",mt3:"dapp-core-component__main__mt-3","my-3":"dapp-core-component__main__my-3",my3:"dapp-core-component__main__my-3","mr-3":"dapp-core-component__main__mr-3",mr3:"dapp-core-component__main__mr-3","mx-3":"dapp-core-component__main__mx-3",mx3:"dapp-core-component__main__mx-3","mb-3":"dapp-core-component__main__mb-3",mb3:"dapp-core-component__main__mb-3","ml-3":"dapp-core-component__main__ml-3",ml3:"dapp-core-component__main__ml-3","m-4":"dapp-core-component__main__m-4",m4:"dapp-core-component__main__m-4","mt-4":"dapp-core-component__main__mt-4",mt4:"dapp-core-component__main__mt-4","my-4":"dapp-core-component__main__my-4",my4:"dapp-core-component__main__my-4","mr-4":"dapp-core-component__main__mr-4",mr4:"dapp-core-component__main__mr-4","mx-4":"dapp-core-component__main__mx-4",mx4:"dapp-core-component__main__mx-4","mb-4":"dapp-core-component__main__mb-4",mb4:"dapp-core-component__main__mb-4","ml-4":"dapp-core-component__main__ml-4",ml4:"dapp-core-component__main__ml-4","m-5":"dapp-core-component__main__m-5",m5:"dapp-core-component__main__m-5","mt-5":"dapp-core-component__main__mt-5",mt5:"dapp-core-component__main__mt-5","my-5":"dapp-core-component__main__my-5",my5:"dapp-core-component__main__my-5","mr-5":"dapp-core-component__main__mr-5",mr5:"dapp-core-component__main__mr-5","mx-5":"dapp-core-component__main__mx-5",mx5:"dapp-core-component__main__mx-5","mb-5":"dapp-core-component__main__mb-5",mb5:"dapp-core-component__main__mb-5","ml-5":"dapp-core-component__main__ml-5",ml5:"dapp-core-component__main__ml-5","p-0":"dapp-core-component__main__p-0",p0:"dapp-core-component__main__p-0","pt-0":"dapp-core-component__main__pt-0",pt0:"dapp-core-component__main__pt-0","py-0":"dapp-core-component__main__py-0",py0:"dapp-core-component__main__py-0","pr-0":"dapp-core-component__main__pr-0",pr0:"dapp-core-component__main__pr-0","px-0":"dapp-core-component__main__px-0",px0:"dapp-core-component__main__px-0","pb-0":"dapp-core-component__main__pb-0",pb0:"dapp-core-component__main__pb-0","pl-0":"dapp-core-component__main__pl-0",pl0:"dapp-core-component__main__pl-0","p-1":"dapp-core-component__main__p-1",p1:"dapp-core-component__main__p-1","pt-1":"dapp-core-component__main__pt-1",pt1:"dapp-core-component__main__pt-1","py-1":"dapp-core-component__main__py-1",py1:"dapp-core-component__main__py-1","pr-1":"dapp-core-component__main__pr-1",pr1:"dapp-core-component__main__pr-1","px-1":"dapp-core-component__main__px-1",px1:"dapp-core-component__main__px-1","pb-1":"dapp-core-component__main__pb-1",pb1:"dapp-core-component__main__pb-1","pl-1":"dapp-core-component__main__pl-1",pl1:"dapp-core-component__main__pl-1","p-2":"dapp-core-component__main__p-2",p2:"dapp-core-component__main__p-2","pt-2":"dapp-core-component__main__pt-2",pt2:"dapp-core-component__main__pt-2","py-2":"dapp-core-component__main__py-2",py2:"dapp-core-component__main__py-2","pr-2":"dapp-core-component__main__pr-2",pr2:"dapp-core-component__main__pr-2","px-2":"dapp-core-component__main__px-2",px2:"dapp-core-component__main__px-2","pb-2":"dapp-core-component__main__pb-2",pb2:"dapp-core-component__main__pb-2","pl-2":"dapp-core-component__main__pl-2",pl2:"dapp-core-component__main__pl-2","p-3":"dapp-core-component__main__p-3",p3:"dapp-core-component__main__p-3","pt-3":"dapp-core-component__main__pt-3",pt3:"dapp-core-component__main__pt-3","py-3":"dapp-core-component__main__py-3",py3:"dapp-core-component__main__py-3","pr-3":"dapp-core-component__main__pr-3",pr3:"dapp-core-component__main__pr-3","px-3":"dapp-core-component__main__px-3",px3:"dapp-core-component__main__px-3","pb-3":"dapp-core-component__main__pb-3",pb3:"dapp-core-component__main__pb-3","pl-3":"dapp-core-component__main__pl-3",pl3:"dapp-core-component__main__pl-3","p-4":"dapp-core-component__main__p-4",p4:"dapp-core-component__main__p-4","pt-4":"dapp-core-component__main__pt-4",pt4:"dapp-core-component__main__pt-4","py-4":"dapp-core-component__main__py-4",py4:"dapp-core-component__main__py-4","pr-4":"dapp-core-component__main__pr-4",pr4:"dapp-core-component__main__pr-4","px-4":"dapp-core-component__main__px-4",px4:"dapp-core-component__main__px-4","pb-4":"dapp-core-component__main__pb-4",pb4:"dapp-core-component__main__pb-4","pl-4":"dapp-core-component__main__pl-4",pl4:"dapp-core-component__main__pl-4","p-5":"dapp-core-component__main__p-5",p5:"dapp-core-component__main__p-5","pt-5":"dapp-core-component__main__pt-5",pt5:"dapp-core-component__main__pt-5","py-5":"dapp-core-component__main__py-5",py5:"dapp-core-component__main__py-5","pr-5":"dapp-core-component__main__pr-5",pr5:"dapp-core-component__main__pr-5","px-5":"dapp-core-component__main__px-5",px5:"dapp-core-component__main__px-5","pb-5":"dapp-core-component__main__pb-5",pb5:"dapp-core-component__main__pb-5","pl-5":"dapp-core-component__main__pl-5",pl5:"dapp-core-component__main__pl-5","m-n1":"dapp-core-component__main__m-n1",mN1:"dapp-core-component__main__m-n1","mt-n1":"dapp-core-component__main__mt-n1",mtN1:"dapp-core-component__main__mt-n1","my-n1":"dapp-core-component__main__my-n1",myN1:"dapp-core-component__main__my-n1","mr-n1":"dapp-core-component__main__mr-n1",mrN1:"dapp-core-component__main__mr-n1","mx-n1":"dapp-core-component__main__mx-n1",mxN1:"dapp-core-component__main__mx-n1","mb-n1":"dapp-core-component__main__mb-n1",mbN1:"dapp-core-component__main__mb-n1","ml-n1":"dapp-core-component__main__ml-n1",mlN1:"dapp-core-component__main__ml-n1","m-n2":"dapp-core-component__main__m-n2",mN2:"dapp-core-component__main__m-n2","mt-n2":"dapp-core-component__main__mt-n2",mtN2:"dapp-core-component__main__mt-n2","my-n2":"dapp-core-component__main__my-n2",myN2:"dapp-core-component__main__my-n2","mr-n2":"dapp-core-component__main__mr-n2",mrN2:"dapp-core-component__main__mr-n2","mx-n2":"dapp-core-component__main__mx-n2",mxN2:"dapp-core-component__main__mx-n2","mb-n2":"dapp-core-component__main__mb-n2",mbN2:"dapp-core-component__main__mb-n2","ml-n2":"dapp-core-component__main__ml-n2",mlN2:"dapp-core-component__main__ml-n2","m-n3":"dapp-core-component__main__m-n3",mN3:"dapp-core-component__main__m-n3","mt-n3":"dapp-core-component__main__mt-n3",mtN3:"dapp-core-component__main__mt-n3","my-n3":"dapp-core-component__main__my-n3",myN3:"dapp-core-component__main__my-n3","mr-n3":"dapp-core-component__main__mr-n3",mrN3:"dapp-core-component__main__mr-n3","mx-n3":"dapp-core-component__main__mx-n3",mxN3:"dapp-core-component__main__mx-n3","mb-n3":"dapp-core-component__main__mb-n3",mbN3:"dapp-core-component__main__mb-n3","ml-n3":"dapp-core-component__main__ml-n3",mlN3:"dapp-core-component__main__ml-n3","m-n4":"dapp-core-component__main__m-n4",mN4:"dapp-core-component__main__m-n4","mt-n4":"dapp-core-component__main__mt-n4",mtN4:"dapp-core-component__main__mt-n4","my-n4":"dapp-core-component__main__my-n4",myN4:"dapp-core-component__main__my-n4","mr-n4":"dapp-core-component__main__mr-n4",mrN4:"dapp-core-component__main__mr-n4","mx-n4":"dapp-core-component__main__mx-n4",mxN4:"dapp-core-component__main__mx-n4","mb-n4":"dapp-core-component__main__mb-n4",mbN4:"dapp-core-component__main__mb-n4","ml-n4":"dapp-core-component__main__ml-n4",mlN4:"dapp-core-component__main__ml-n4","m-n5":"dapp-core-component__main__m-n5",mN5:"dapp-core-component__main__m-n5","mt-n5":"dapp-core-component__main__mt-n5",mtN5:"dapp-core-component__main__mt-n5","my-n5":"dapp-core-component__main__my-n5",myN5:"dapp-core-component__main__my-n5","mr-n5":"dapp-core-component__main__mr-n5",mrN5:"dapp-core-component__main__mr-n5","mx-n5":"dapp-core-component__main__mx-n5",mxN5:"dapp-core-component__main__mx-n5","mb-n5":"dapp-core-component__main__mb-n5",mbN5:"dapp-core-component__main__mb-n5","ml-n5":"dapp-core-component__main__ml-n5",mlN5:"dapp-core-component__main__ml-n5","m-auto":"dapp-core-component__main__m-auto",mAuto:"dapp-core-component__main__m-auto","mt-auto":"dapp-core-component__main__mt-auto",mtAuto:"dapp-core-component__main__mt-auto","my-auto":"dapp-core-component__main__my-auto",myAuto:"dapp-core-component__main__my-auto","mr-auto":"dapp-core-component__main__mr-auto",mrAuto:"dapp-core-component__main__mr-auto","mb-auto":"dapp-core-component__main__mb-auto",mbAuto:"dapp-core-component__main__mb-auto","ml-auto":"dapp-core-component__main__ml-auto",mlAuto:"dapp-core-component__main__ml-auto","mr-lg-1":"dapp-core-component__main__mr-lg-1",mrLg1:"dapp-core-component__main__mr-lg-1","mr-lg-4":"dapp-core-component__main__mr-lg-4",mrLg4:"dapp-core-component__main__mr-lg-4","mx-lg-4":"dapp-core-component__main__mx-lg-4",mxLg4:"dapp-core-component__main__mx-lg-4","mb-xl-2":"dapp-core-component__main__mb-xl-2",mbXl2:"dapp-core-component__main__mb-xl-2","pr-sm-2":"dapp-core-component__main__pr-sm-2",prSm2:"dapp-core-component__main__pr-sm-2","px-sm-2":"dapp-core-component__main__px-sm-2",pxSm2:"dapp-core-component__main__px-sm-2","pr-xl-0":"dapp-core-component__main__pr-xl-0",prXl0:"dapp-core-component__main__pr-xl-0","px-xl-0":"dapp-core-component__main__px-xl-0",pxXl0:"dapp-core-component__main__px-xl-0",col:"dapp-core-component__main__col",row:"dapp-core-component__main__row","col-xl":"dapp-core-component__main__col-xl",colXl:"dapp-core-component__main__col-xl","col-xl-auto":"dapp-core-component__main__col-xl-auto",colXlAuto:"dapp-core-component__main__col-xl-auto","col-xl-12":"dapp-core-component__main__col-xl-12",colXl12:"dapp-core-component__main__col-xl-12","col-xl-11":"dapp-core-component__main__col-xl-11",colXl11:"dapp-core-component__main__col-xl-11","col-xl-10":"dapp-core-component__main__col-xl-10",colXl10:"dapp-core-component__main__col-xl-10","col-xl-9":"dapp-core-component__main__col-xl-9",colXl9:"dapp-core-component__main__col-xl-9","col-xl-8":"dapp-core-component__main__col-xl-8",colXl8:"dapp-core-component__main__col-xl-8","col-xl-7":"dapp-core-component__main__col-xl-7",colXl7:"dapp-core-component__main__col-xl-7","col-xl-6":"dapp-core-component__main__col-xl-6",colXl6:"dapp-core-component__main__col-xl-6","col-xl-5":"dapp-core-component__main__col-xl-5",colXl5:"dapp-core-component__main__col-xl-5","col-xl-4":"dapp-core-component__main__col-xl-4",colXl4:"dapp-core-component__main__col-xl-4","col-xl-3":"dapp-core-component__main__col-xl-3",colXl3:"dapp-core-component__main__col-xl-3","col-xl-2":"dapp-core-component__main__col-xl-2",colXl2:"dapp-core-component__main__col-xl-2","col-xl-1":"dapp-core-component__main__col-xl-1",colXl1:"dapp-core-component__main__col-xl-1","col-lg":"dapp-core-component__main__col-lg",colLg:"dapp-core-component__main__col-lg","col-lg-auto":"dapp-core-component__main__col-lg-auto",colLgAuto:"dapp-core-component__main__col-lg-auto","col-lg-12":"dapp-core-component__main__col-lg-12",colLg12:"dapp-core-component__main__col-lg-12","col-lg-11":"dapp-core-component__main__col-lg-11",colLg11:"dapp-core-component__main__col-lg-11","col-lg-10":"dapp-core-component__main__col-lg-10",colLg10:"dapp-core-component__main__col-lg-10","col-lg-9":"dapp-core-component__main__col-lg-9",colLg9:"dapp-core-component__main__col-lg-9","col-lg-8":"dapp-core-component__main__col-lg-8",colLg8:"dapp-core-component__main__col-lg-8","col-lg-7":"dapp-core-component__main__col-lg-7",colLg7:"dapp-core-component__main__col-lg-7","col-lg-6":"dapp-core-component__main__col-lg-6",colLg6:"dapp-core-component__main__col-lg-6","col-lg-5":"dapp-core-component__main__col-lg-5",colLg5:"dapp-core-component__main__col-lg-5","col-lg-4":"dapp-core-component__main__col-lg-4",colLg4:"dapp-core-component__main__col-lg-4","col-lg-3":"dapp-core-component__main__col-lg-3",colLg3:"dapp-core-component__main__col-lg-3","col-lg-2":"dapp-core-component__main__col-lg-2",colLg2:"dapp-core-component__main__col-lg-2","col-lg-1":"dapp-core-component__main__col-lg-1",colLg1:"dapp-core-component__main__col-lg-1","col-md":"dapp-core-component__main__col-md",colMd:"dapp-core-component__main__col-md","col-md-auto":"dapp-core-component__main__col-md-auto",colMdAuto:"dapp-core-component__main__col-md-auto","col-md-12":"dapp-core-component__main__col-md-12",colMd12:"dapp-core-component__main__col-md-12","col-md-11":"dapp-core-component__main__col-md-11",colMd11:"dapp-core-component__main__col-md-11","col-md-10":"dapp-core-component__main__col-md-10",colMd10:"dapp-core-component__main__col-md-10","col-md-9":"dapp-core-component__main__col-md-9",colMd9:"dapp-core-component__main__col-md-9","col-md-8":"dapp-core-component__main__col-md-8",colMd8:"dapp-core-component__main__col-md-8","col-md-7":"dapp-core-component__main__col-md-7",colMd7:"dapp-core-component__main__col-md-7","col-md-6":"dapp-core-component__main__col-md-6",colMd6:"dapp-core-component__main__col-md-6","col-md-5":"dapp-core-component__main__col-md-5",colMd5:"dapp-core-component__main__col-md-5","col-md-4":"dapp-core-component__main__col-md-4",colMd4:"dapp-core-component__main__col-md-4","col-md-3":"dapp-core-component__main__col-md-3",colMd3:"dapp-core-component__main__col-md-3","col-md-2":"dapp-core-component__main__col-md-2",colMd2:"dapp-core-component__main__col-md-2","col-md-1":"dapp-core-component__main__col-md-1",colMd1:"dapp-core-component__main__col-md-1","col-sm":"dapp-core-component__main__col-sm",colSm:"dapp-core-component__main__col-sm","col-sm-auto":"dapp-core-component__main__col-sm-auto",colSmAuto:"dapp-core-component__main__col-sm-auto","col-sm-12":"dapp-core-component__main__col-sm-12",colSm12:"dapp-core-component__main__col-sm-12","col-sm-11":"dapp-core-component__main__col-sm-11",colSm11:"dapp-core-component__main__col-sm-11","col-sm-10":"dapp-core-component__main__col-sm-10",colSm10:"dapp-core-component__main__col-sm-10","col-sm-9":"dapp-core-component__main__col-sm-9",colSm9:"dapp-core-component__main__col-sm-9","col-sm-8":"dapp-core-component__main__col-sm-8",colSm8:"dapp-core-component__main__col-sm-8","col-sm-7":"dapp-core-component__main__col-sm-7",colSm7:"dapp-core-component__main__col-sm-7","col-sm-6":"dapp-core-component__main__col-sm-6",colSm6:"dapp-core-component__main__col-sm-6","col-sm-5":"dapp-core-component__main__col-sm-5",colSm5:"dapp-core-component__main__col-sm-5","col-sm-4":"dapp-core-component__main__col-sm-4",colSm4:"dapp-core-component__main__col-sm-4","col-sm-3":"dapp-core-component__main__col-sm-3",colSm3:"dapp-core-component__main__col-sm-3","col-sm-2":"dapp-core-component__main__col-sm-2",colSm2:"dapp-core-component__main__col-sm-2","col-sm-1":"dapp-core-component__main__col-sm-1",colSm1:"dapp-core-component__main__col-sm-1","col-auto":"dapp-core-component__main__col-auto",colAuto:"dapp-core-component__main__col-auto","col-12":"dapp-core-component__main__col-12",col12:"dapp-core-component__main__col-12","col-11":"dapp-core-component__main__col-11",col11:"dapp-core-component__main__col-11","col-10":"dapp-core-component__main__col-10",col10:"dapp-core-component__main__col-10","col-9":"dapp-core-component__main__col-9",col9:"dapp-core-component__main__col-9","col-8":"dapp-core-component__main__col-8",col8:"dapp-core-component__main__col-8","col-7":"dapp-core-component__main__col-7",col7:"dapp-core-component__main__col-7","col-6":"dapp-core-component__main__col-6",col6:"dapp-core-component__main__col-6","col-5":"dapp-core-component__main__col-5",col5:"dapp-core-component__main__col-5","col-4":"dapp-core-component__main__col-4",col4:"dapp-core-component__main__col-4","col-3":"dapp-core-component__main__col-3",col3:"dapp-core-component__main__col-3","col-2":"dapp-core-component__main__col-2",col2:"dapp-core-component__main__col-2","col-1":"dapp-core-component__main__col-1",col1:"dapp-core-component__main__col-1","flex-row":"dapp-core-component__main__flex-row",flexRow:"dapp-core-component__main__flex-row","flex-column":"dapp-core-component__main__flex-column",flexColumn:"dapp-core-component__main__flex-column","flex-row-reverse":"dapp-core-component__main__flex-row-reverse",flexRowReverse:"dapp-core-component__main__flex-row-reverse","flex-column-reverse":"dapp-core-component__main__flex-column-reverse",flexColumnReverse:"dapp-core-component__main__flex-column-reverse","flex-wrap":"dapp-core-component__main__flex-wrap",flexWrap:"dapp-core-component__main__flex-wrap","flex-nowrap":"dapp-core-component__main__flex-nowrap",flexNowrap:"dapp-core-component__main__flex-nowrap","flex-wrap-reverse":"dapp-core-component__main__flex-wrap-reverse",flexWrapReverse:"dapp-core-component__main__flex-wrap-reverse","flex-fill":"dapp-core-component__main__flex-fill",flexFill:"dapp-core-component__main__flex-fill","flex-grow-0":"dapp-core-component__main__flex-grow-0",flexGrow0:"dapp-core-component__main__flex-grow-0","flex-grow-1":"dapp-core-component__main__flex-grow-1",flexGrow1:"dapp-core-component__main__flex-grow-1","flex-shrink-0":"dapp-core-component__main__flex-shrink-0",flexShrink0:"dapp-core-component__main__flex-shrink-0","flex-shrink-1":"dapp-core-component__main__flex-shrink-1",flexShrink1:"dapp-core-component__main__flex-shrink-1","justify-content-start":"dapp-core-component__main__justify-content-start",justifyContentStart:"dapp-core-component__main__justify-content-start","justify-content-end":"dapp-core-component__main__justify-content-end",justifyContentEnd:"dapp-core-component__main__justify-content-end","justify-content-center":"dapp-core-component__main__justify-content-center",justifyContentCenter:"dapp-core-component__main__justify-content-center","justify-content-between":"dapp-core-component__main__justify-content-between",justifyContentBetween:"dapp-core-component__main__justify-content-between","justify-content-around":"dapp-core-component__main__justify-content-around",justifyContentAround:"dapp-core-component__main__justify-content-around","align-items-start":"dapp-core-component__main__align-items-start",alignItemsStart:"dapp-core-component__main__align-items-start","align-items-end":"dapp-core-component__main__align-items-end",alignItemsEnd:"dapp-core-component__main__align-items-end","align-items-center":"dapp-core-component__main__align-items-center",alignItemsCenter:"dapp-core-component__main__align-items-center","align-items-baseline":"dapp-core-component__main__align-items-baseline",alignItemsBaseline:"dapp-core-component__main__align-items-baseline","align-items-stretch":"dapp-core-component__main__align-items-stretch",alignItemsStretch:"dapp-core-component__main__align-items-stretch","align-content-start":"dapp-core-component__main__align-content-start",alignContentStart:"dapp-core-component__main__align-content-start","align-content-end":"dapp-core-component__main__align-content-end",alignContentEnd:"dapp-core-component__main__align-content-end","align-content-center":"dapp-core-component__main__align-content-center",alignContentCenter:"dapp-core-component__main__align-content-center","align-content-between":"dapp-core-component__main__align-content-between",alignContentBetween:"dapp-core-component__main__align-content-between","align-content-around":"dapp-core-component__main__align-content-around",alignContentAround:"dapp-core-component__main__align-content-around","align-content-stretch":"dapp-core-component__main__align-content-stretch",alignContentStretch:"dapp-core-component__main__align-content-stretch","align-self-auto":"dapp-core-component__main__align-self-auto",alignSelfAuto:"dapp-core-component__main__align-self-auto","align-self-start":"dapp-core-component__main__align-self-start",alignSelfStart:"dapp-core-component__main__align-self-start","align-self-end":"dapp-core-component__main__align-self-end",alignSelfEnd:"dapp-core-component__main__align-self-end","align-self-center":"dapp-core-component__main__align-self-center",alignSelfCenter:"dapp-core-component__main__align-self-center","align-self-baseline":"dapp-core-component__main__align-self-baseline",alignSelfBaseline:"dapp-core-component__main__align-self-baseline","align-self-stretch":"dapp-core-component__main__align-self-stretch",alignSelfStretch:"dapp-core-component__main__align-self-stretch","flex-sm-row":"dapp-core-component__main__flex-sm-row",flexSmRow:"dapp-core-component__main__flex-sm-row","flex-lg-row":"dapp-core-component__main__flex-lg-row",flexLgRow:"dapp-core-component__main__flex-lg-row","flex-lg-wrap":"dapp-core-component__main__flex-lg-wrap",flexLgWrap:"dapp-core-component__main__flex-lg-wrap","form-check":"dapp-core-component__main__form-check",formCheck:"dapp-core-component__main__form-check","form-check-label":"dapp-core-component__main__form-check-label",formCheckLabel:"dapp-core-component__main__form-check-label","form-check-input":"dapp-core-component__main__form-check-input",formCheckInput:"dapp-core-component__main__form-check-input","form-group":"dapp-core-component__main__form-group",formGroup:"dapp-core-component__main__form-group","form-control":"dapp-core-component__main__form-control",formControl:"dapp-core-component__main__form-control","form-label":"dapp-core-component__main__form-label",formLabel:"dapp-core-component__main__form-label","form-text":"dapp-core-component__main__form-text",formText:"dapp-core-component__main__form-text",border:"dapp-core-component__main__border","border-top":"dapp-core-component__main__border-top",borderTop:"dapp-core-component__main__border-top","border-right":"dapp-core-component__main__border-right",borderRight:"dapp-core-component__main__border-right","border-bottom":"dapp-core-component__main__border-bottom",borderBottom:"dapp-core-component__main__border-bottom","border-left":"dapp-core-component__main__border-left",borderLeft:"dapp-core-component__main__border-left","border-0":"dapp-core-component__main__border-0",border0:"dapp-core-component__main__border-0","border-top-0":"dapp-core-component__main__border-top-0",borderTop0:"dapp-core-component__main__border-top-0","border-right-0":"dapp-core-component__main__border-right-0",borderRight0:"dapp-core-component__main__border-right-0","border-bottom-0":"dapp-core-component__main__border-bottom-0",borderBottom0:"dapp-core-component__main__border-bottom-0","border-left-0":"dapp-core-component__main__border-left-0",borderLeft0:"dapp-core-component__main__border-left-0","rounded-sm":"dapp-core-component__main__rounded-sm",roundedSm:"dapp-core-component__main__rounded-sm",rounded:"dapp-core-component__main__rounded","rounded-top":"dapp-core-component__main__rounded-top",roundedTop:"dapp-core-component__main__rounded-top","rounded-right":"dapp-core-component__main__rounded-right",roundedRight:"dapp-core-component__main__rounded-right","rounded-bottom":"dapp-core-component__main__rounded-bottom",roundedBottom:"dapp-core-component__main__rounded-bottom","rounded-left":"dapp-core-component__main__rounded-left",roundedLeft:"dapp-core-component__main__rounded-left","rounded-lg":"dapp-core-component__main__rounded-lg",roundedLg:"dapp-core-component__main__rounded-lg","rounded-circle":"dapp-core-component__main__rounded-circle",roundedCircle:"dapp-core-component__main__rounded-circle","rounded-pill":"dapp-core-component__main__rounded-pill",roundedPill:"dapp-core-component__main__rounded-pill","rounded-0":"dapp-core-component__main__rounded-0",rounded0:"dapp-core-component__main__rounded-0",h1:"dapp-core-component__main__h1",h2:"dapp-core-component__main__h2",h3:"dapp-core-component__main__h3",h4:"dapp-core-component__main__h4",h5:"dapp-core-component__main__h5",lead:"dapp-core-component__main__lead","bg-primary":"dapp-core-component__main__bg-primary",bgPrimary:"dapp-core-component__main__bg-primary","bg-warning":"dapp-core-component__main__bg-warning",bgWarning:"dapp-core-component__main__bg-warning",warning:"dapp-core-component__main__warning","bg-danger":"dapp-core-component__main__bg-danger",bgDanger:"dapp-core-component__main__bg-danger",danger:"dapp-core-component__main__danger","bg-success":"dapp-core-component__main__bg-success",bgSuccess:"dapp-core-component__main__bg-success",success:"dapp-core-component__main__success","position-relative":"dapp-core-component__main__position-relative",positionRelative:"dapp-core-component__main__position-relative","position-absolute":"dapp-core-component__main__position-absolute",positionAbsolute:"dapp-core-component__main__position-absolute","w-25":"dapp-core-component__main__w-25",w25:"dapp-core-component__main__w-25","w-50":"dapp-core-component__main__w-50",w50:"dapp-core-component__main__w-50","w-75":"dapp-core-component__main__w-75",w75:"dapp-core-component__main__w-75","w-100":"dapp-core-component__main__w-100",w100:"dapp-core-component__main__w-100","w-auto":"dapp-core-component__main__w-auto",wAuto:"dapp-core-component__main__w-auto","h-25":"dapp-core-component__main__h-25",h25:"dapp-core-component__main__h-25","h-50":"dapp-core-component__main__h-50",h50:"dapp-core-component__main__h-50","h-75":"dapp-core-component__main__h-75",h75:"dapp-core-component__main__h-75","h-100":"dapp-core-component__main__h-100",h100:"dapp-core-component__main__h-100","h-auto":"dapp-core-component__main__h-auto",hAuto:"dapp-core-component__main__h-auto","mw-100":"dapp-core-component__main__mw-100",mw100:"dapp-core-component__main__mw-100","mh-100":"dapp-core-component__main__mh-100",mh100:"dapp-core-component__main__mh-100","min-vw-100":"dapp-core-component__main__min-vw-100",minVw100:"dapp-core-component__main__min-vw-100","min-vh-100":"dapp-core-component__main__min-vh-100",minVh100:"dapp-core-component__main__min-vh-100","vw-100":"dapp-core-component__main__vw-100",vw100:"dapp-core-component__main__vw-100","vh-100":"dapp-core-component__main__vh-100",vh100:"dapp-core-component__main__vh-100","w-md-auto":"dapp-core-component__main__w-md-auto",wMdAuto:"dapp-core-component__main__w-md-auto","locked-icon":"dapp-core-component__main__locked-icon",lockedIcon:"dapp-core-component__main__locked-icon","shadow-sm":"dapp-core-component__main__shadow-sm",shadowSm:"dapp-core-component__main__shadow-sm",shadow:"dapp-core-component__main__shadow","shadow-lg":"dapp-core-component__main__shadow-lg",shadowLg:"dapp-core-component__main__shadow-lg","shadow-none":"dapp-core-component__main__shadow-none",shadowNone:"dapp-core-component__main__shadow-none","d-none":"dapp-core-component__main__d-none",dNone:"dapp-core-component__main__d-none","d-inline":"dapp-core-component__main__d-inline",dInline:"dapp-core-component__main__d-inline","d-inline-block":"dapp-core-component__main__d-inline-block",dInlineBlock:"dapp-core-component__main__d-inline-block","d-block":"dapp-core-component__main__d-block",dBlock:"dapp-core-component__main__d-block","d-table":"dapp-core-component__main__d-table",dTable:"dapp-core-component__main__d-table","d-table-row":"dapp-core-component__main__d-table-row",dTableRow:"dapp-core-component__main__d-table-row","d-table-cell":"dapp-core-component__main__d-table-cell",dTableCell:"dapp-core-component__main__d-table-cell","d-flex":"dapp-core-component__main__d-flex",dFlex:"dapp-core-component__main__d-flex","d-inline-flex":"dapp-core-component__main__d-inline-flex",dInlineFlex:"dapp-core-component__main__d-inline-flex","d-sm-flex":"dapp-core-component__main__d-sm-flex",dSmFlex:"dapp-core-component__main__d-sm-flex","table-sm":"dapp-core-component__main__table-sm",tableSm:"dapp-core-component__main__table-sm","table-bordered":"dapp-core-component__main__table-bordered",tableBordered:"dapp-core-component__main__table-bordered","table-borderless":"dapp-core-component__main__table-borderless",tableBorderless:"dapp-core-component__main__table-borderless","table-striped":"dapp-core-component__main__table-striped",tableStriped:"dapp-core-component__main__table-striped","thead-dark":"dapp-core-component__main__thead-dark",theadDark:"dapp-core-component__main__thead-dark","thead-light":"dapp-core-component__main__thead-light",theadLight:"dapp-core-component__main__thead-light","table-dark":"dapp-core-component__main__table-dark",tableDark:"dapp-core-component__main__table-dark","table-hover":"dapp-core-component__main__table-hover",tableHover:"dapp-core-component__main__table-hover","table-responsive":"dapp-core-component__main__table-responsive",tableResponsive:"dapp-core-component__main__table-responsive","transaction-hash":"dapp-core-component__main__transaction-hash",transactionHash:"dapp-core-component__main__transaction-hash","font-weight-light":"dapp-core-component__main__font-weight-light",fontWeightLight:"dapp-core-component__main__font-weight-light","font-weight-lighter":"dapp-core-component__main__font-weight-lighter",fontWeightLighter:"dapp-core-component__main__font-weight-lighter","font-weight-normal":"dapp-core-component__main__font-weight-normal",fontWeightNormal:"dapp-core-component__main__font-weight-normal","font-weight-medium":"dapp-core-component__main__font-weight-medium",fontWeightMedium:"dapp-core-component__main__font-weight-medium","font-weight-bold":"dapp-core-component__main__font-weight-bold",fontWeightBold:"dapp-core-component__main__font-weight-bold","font-weight-bolder":"dapp-core-component__main__font-weight-bolder",fontWeightBolder:"dapp-core-component__main__font-weight-bolder","font-italic":"dapp-core-component__main__font-italic",fontItalic:"dapp-core-component__main__font-italic","icon-state":"dapp-core-component__main__icon-state",iconState:"dapp-core-component__main__icon-state",half:"dapp-core-component__main__half","side-icon":"dapp-core-component__main__side-icon",sideIcon:"dapp-core-component__main__side-icon","toast-messages":"dapp-core-component__main__toast-messages",toastMessages:"dapp-core-component__main__toast-messages",toast:"dapp-core-component__main__toast",clickable:"dapp-core-component__main__clickable","toast-visible":"dapp-core-component__main__toast-visible",toastVisible:"dapp-core-component__main__toast-visible",progress:"dapp-core-component__main__progress","progress-bar":"dapp-core-component__main__progress-bar",progressBar:"dapp-core-component__main__progress-bar","content-height":"dapp-core-component__main__content-height",contentHeight:"dapp-core-component__main__content-height","tx-description":"dapp-core-component__main__tx-description",txDescription:"dapp-core-component__main__tx-description",close:"dapp-core-component__main__close","data-field":"dapp-core-component__main__data-field",dataField:"dapp-core-component__main__data-field",textarea:"dapp-core-component__main__textarea",highlighted:"dapp-core-component__main__highlighted","sc-call":"dapp-core-component__main__sc-call",scCall:"dapp-core-component__main__sc-call","small-font":"dapp-core-component__main__small-font",smallFont:"dapp-core-component__main__small-font","progress-steps":"dapp-core-component__main__progress-steps",progressSteps:"dapp-core-component__main__progress-steps",steps:"dapp-core-component__main__steps",dot:"dapp-core-component__main__dot","side-link":"dapp-core-component__main__side-link",sideLink:"dapp-core-component__main__side-link"}});var Tc=b((nw,hc)=>{n();var ef=typeof i=="object"&&i&&i.Object===Object&&i;hc.exports=ef});var sn=b((tw,xc)=>{n();var of=Tc(),nf=typeof self=="object"&&self&&self.Object===Object&&self,tf=of||nf||Function("return this")();xc.exports=tf});var $n=b((rw,yc)=>{n();var rf=sn(),af=rf.Symbol;yc.exports=af});var bc=b((aw,Sc)=>{n();function cf(o,e){for(var t=-1,r=o==null?0:o.length,s=Array(r);++t<r;)s[t]=e(o[t],t,o);return s}Sc.exports=cf});var Sr=b((iw,vc)=>{n();var sf=Array.isArray;vc.exports=sf});var kc=b((cw,Ic)=>{n();var wc=$n(),Ac=Object.prototype,pf=Ac.hasOwnProperty,mf=Ac.toString,pn=wc?wc.toStringTag:void 0;function df(o){var e=pf.call(o,pn),t=o[pn];try{o[pn]=void 0;var r=!0}catch(p){}var s=mf.call(o);return r&&(e?o[pn]=t:delete o[pn]),s}Ic.exports=df});var Dc=b((sw,Lc)=>{n();var _f=Object.prototype,lf=_f.toString;function uf(o){return lf.call(o)}Lc.exports=uf});var qn=b((pw,Ec)=>{n();var Nc=$n(),ff=kc(),gf=Dc(),hf="[object Null]",Tf="[object Undefined]",Cc=Nc?Nc.toStringTag:void 0;function xf(o){return o==null?o===void 0?Tf:hf:Cc&&Cc in Object(o)?ff(o):gf(o)}Ec.exports=xf});var br=b((mw,Pc)=>{n();function yf(o){return o!=null&&typeof o=="object"}Pc.exports=yf});var Mc=b((dw,Rc)=>{n();var Sf=qn(),bf=br(),vf="[object Symbol]";function wf(o){return typeof o=="symbol"||bf(o)&&Sf(o)==vf}Rc.exports=wf});var Gc=b((_w,Uc)=>{n();var Oc=$n(),Af=bc(),If=Sr(),kf=Mc(),Lf=1/0,Wc=Oc?Oc.prototype:void 0,Fc=Wc?Wc.toString:void 0;function Bc(o){if(typeof o=="string")return o;if(If(o))return Af(o,Bc)+"";if(kf(o))return Fc?Fc.call(o):"";var e=o+"";return e=="0"&&1/o==-Lf?"-0":e}Uc.exports=Bc});var vr=b((lw,Hc)=>{n();var Df=Gc();function Nf(o){return o==null?"":Df(o)}Hc.exports=Nf});var $c=b((uw,Vc)=>{n();function Cf(o,e,t){var r=-1,s=o.length;e<0&&(e=-e>s?0:s+e),t=t>s?s:t,t<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var p=Array(s);++r<s;)p[r]=o[r+e];return p}Vc.exports=Cf});var jc=b((fw,qc)=>{n();var Ef=$c();function Pf(o,e,t){var r=o.length;return t=t===void 0?r:t,!e&&t>=r?o:Ef(o,e,t)}qc.exports=Pf});var wr=b((gw,zc)=>{n();var Rf="\\ud800-\\udfff",Mf="\\u0300-\\u036f",Of="\\ufe20-\\ufe2f",Wf="\\u20d0-\\u20ff",Ff=Mf+Of+Wf,Bf="\\ufe0e\\ufe0f",Uf="\\u200d",Gf=RegExp("["+Uf+Rf+Ff+Bf+"]");function Hf(o){return Gf.test(o)}zc.exports=Hf});var Xc=b((hw,Kc)=>{n();function Vf(o){return o.split("")}Kc.exports=Vf});var ts=b((Tw,ns)=>{n();var Yc="\\ud800-\\udfff",$f="\\u0300-\\u036f",qf="\\ufe20-\\ufe2f",jf="\\u20d0-\\u20ff",zf=$f+qf+jf,Kf="\\ufe0e\\ufe0f",Xf="["+Yc+"]",Ar="["+zf+"]",Ir="\\ud83c[\\udffb-\\udfff]",Yf="(?:"+Ar+"|"+Ir+")",Zc="[^"+Yc+"]",Jc="(?:\\ud83c[\\udde6-\\uddff]){2}",Qc="[\\ud800-\\udbff][\\udc00-\\udfff]",Zf="\\u200d",es=Yf+"?",os="["+Kf+"]?",Jf="(?:"+Zf+"(?:"+[Zc,Jc,Qc].join("|")+")"+os+es+")*",Qf=os+es+Jf,eg="(?:"+[Zc+Ar+"?",Ar,Jc,Qc,Xf].join("|")+")",og=RegExp(Ir+"(?="+Ir+")|"+eg+Qf,"g");function ng(o){return o.match(og)||[]}ns.exports=ng});var as=b((xw,rs)=>{n();var tg=Xc(),rg=wr(),ag=ts();function ig(o){return rg(o)?ag(o):tg(o)}rs.exports=ig});var cs=b((yw,is)=>{n();var cg=jc(),sg=wr(),pg=as(),mg=vr();function dg(o){return function(e){e=mg(e);var t=sg(e)?pg(e):void 0,r=t?t[0]:e.charAt(0),s=t?cg(t,1).join(""):e.slice(1);return r[o]()+s}}is.exports=dg});var ps=b((Sw,ss)=>{n();var _g=cs(),lg=_g("toUpperCase");ss.exports=lg});var ds=b((bw,ms)=>{n();var ug=vr(),fg=ps();function gg(o){return fg(ug(o).toLowerCase())}ms.exports=gg});var Nr={};W(Nr,{css:()=>bs,default:()=>Sg});var bs,Sg,Cr=y(()=>{"use strict";n();bs=`.dapp-core-component__copyButton-styles__copy {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(bs));Sg={copy:"dapp-core-component__copyButton-styles__copy"}});var Pr={};W(Pr,{css:()=>As,default:()=>vg});var As,vg,Rr=y(()=>{"use strict";n();As=`.dapp-core-component__TransactionDataStyles__transactionData {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataLabel {
  align-items: center;
  color: #a3a3a3;
  display: flex;
  justify-content: space-between;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper {
  border-radius: 8px;
  border: 1px solid #262626;
  padding: 4px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue {
  min-height: 60px;
  line-height: 1.25;
  max-height: 60px;
  overflow-y: auto;
  word-break: break-all;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  padding: 4px;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track:hover, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-corner {
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar {
  width: calc(0.5rem + 8px);
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-track:hover {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-thumb, .dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-thumb:hover {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: #404040;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueText {
  flex: 1;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy {
  position: sticky;
  min-width: 1rem;
  max-width: 1rem;
  top: 0;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy:hover path {
  color: #0ac2ae;
}
.dapp-core-component__TransactionDataStyles__transactionData .dapp-core-component__TransactionDataStyles__transactionDataValueWrapper .dapp-core-component__TransactionDataStyles__transactionDataValue .dapp-core-component__TransactionDataStyles__transactionDataValueCopy path {
  color: #737373;
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(As));vg={transactionData:"dapp-core-component__TransactionDataStyles__transactionData",transactionDataLabel:"dapp-core-component__TransactionDataStyles__transactionDataLabel",transactionDataValueWrapper:"dapp-core-component__TransactionDataStyles__transactionDataValueWrapper",transactionDataValue:"dapp-core-component__TransactionDataStyles__transactionDataValue",transactionDataValueText:"dapp-core-component__TransactionDataStyles__transactionDataValueText",transactionDataValueCopy:"dapp-core-component__TransactionDataStyles__transactionDataValueCopy"}});var _n,Yn=y(()=>{"use strict";n();_n=()=>Date.now()/1e3});var Ds=y(()=>{"use strict";n()});var Ns=y(()=>{"use strict";n()});var Mr=y(()=>{"use strict";n();Yn();Ds();Ns()});var Or={};W(Or,{clear:()=>Dg,getItem:()=>kg,localStorageKeys:()=>Ye,removeItem:()=>Lg,setItem:()=>Ig});var Ye,Zn,Ig,kg,Lg,Dg,Wo=y(()=>{"use strict";n();Mr();Ye={loginExpiresAt:"sdk-dapp-login-expires-at",logoutEvent:"sdk-dapp-logout-event"},Zn=typeof localStorage!="undefined",Ig=({key:o,data:e,expires:t})=>{!Zn||localStorage.setItem(String(o),JSON.stringify({expires:t,data:e}))},kg=o=>{if(!Zn)return;let e=localStorage.getItem(String(o));if(!e)return null;let t=JSON.parse(e);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:_n()>=t.expires?(localStorage.removeItem(String(o)),null):t.data},Lg=o=>{!Zn||localStorage.removeItem(String(o))},Dg=()=>{!Zn||localStorage.clear()}});var Wr={};W(Wr,{clear:()=>Rs,getItem:()=>Es,removeItem:()=>Ps,setItem:()=>Cs,storage:()=>Ng});var Cs,Es,Ps,Rs,Ng,Ms=y(()=>{"use strict";n();Cs=({key:o,data:e,expires:t})=>{sessionStorage.setItem(String(o),JSON.stringify({expires:t,data:e}))},Es=o=>{let e=sessionStorage.getItem(String(o));if(!e)return null;let t=JSON.parse(e);return!t||!t.hasOwnProperty("expires")||!t.hasOwnProperty("data")?null:Date.now()>=t.expires?(sessionStorage.removeItem(String(o)),null):t.data},Ps=o=>sessionStorage.removeItem(String(o)),Rs=()=>sessionStorage.clear(),Ng={setItem:Cs,getItem:Es,removeItem:Ps,clear:Rs}});var ho,Fo=y(()=>{"use strict";n();Wo();Ms();ho={session:Wr,local:Or}});var Fr,U,pe,G=y(()=>{"use strict";n();Fr=require("@reduxjs/toolkit");k();U=(0,Fr.createAction)(Vn),pe=(0,Fr.createAction)(pc,o=>({payload:o}))});var Ur,Os,Ws,Jn,Br,Fs,Qn,Cg,Gr,rI,Eg,Pg,aI,iI,cI,Rg,Mg,et,ot=y(()=>{"use strict";n();Ur=require("@multiversx/sdk-core"),Os=require("@reduxjs/toolkit"),Ws=require("redux-persist");k();Fo();Wo();G();Jn={balance:"...",address:"",isGuarded:!1,nonce:0,txCount:0,scrCount:0,claimableRewards:le},Br={address:"",websocketEvent:null,websocketBatchEvent:null,accounts:{"":Jn},ledgerAccount:null,publicKey:"",walletConnectAccount:null,isAccountLoading:!0,accountLoadingError:null},Fs=(0,Os.createSlice)({name:"accountInfoSlice",initialState:Br,reducers:{setAddress:(o,e)=>{let t=e.payload;o.address=t,o.publicKey=t?new Ur.Address(t).hex():""},setAccount:(o,e)=>{let t=o.address===e.payload.address;o.accounts={[o.address]:t?e.payload:Jn},o.shard=e.payload.shard,o.isAccountLoading=!1,o.accountLoadingError=null},setAccountNonce:(o,e)=>{let{address:t}=o;o.accounts[t].nonce=e.payload},setAccountShard:(o,e)=>{o.shard=e.payload},setLedgerAccount:(o,e)=>{o.ledgerAccount=e.payload},updateLedgerAccount:(o,e)=>{o.ledgerAccount!=null&&(o.ledgerAccount.index=e.payload.index,o.ledgerAccount.address=e.payload.address)},setWalletConnectAccount:(o,e)=>{o.walletConnectAccount=e.payload},setIsAccountLoading:(o,e)=>{o.isAccountLoading=e.payload,o.accountLoadingError=null},setAccountLoadingError:(o,e)=>{o.accountLoadingError=e.payload,o.isAccountLoading=!1},setWebsocketEvent:(o,e)=>{o.websocketEvent={timestamp:Date.now(),message:e.payload}},setWebsocketBatchEvent:(o,e)=>{o.websocketBatchEvent={timestamp:Date.now(),data:e.payload}}},extraReducers:o=>{o.addCase(U,()=>(ho.local.removeItem(Ye.loginExpiresAt),Br)),o.addCase(pe,(e,t)=>{let{address:r}=t.payload;e.address=r,e.publicKey=new Ur.Address(r).hex()}),o.addCase(Ws.REHYDRATE,(e,t)=>{var l;if(!((l=t.payload)!=null&&l.account))return;let{account:r}=t.payload,{address:s,shard:p,accounts:m,publicKey:d}=r;e.address=s,e.shard=p;let _=m&&s in m;e.accounts=_?m:Br.accounts,e.publicKey=d})}}),{setAccount:Qn,setAddress:Cg,setAccountNonce:Gr,setAccountShard:rI,setLedgerAccount:Eg,updateLedgerAccount:Pg,setWalletConnectAccount:aI,setIsAccountLoading:iI,setAccountLoadingError:cI,setWebsocketEvent:Rg,setWebsocketBatchEvent:Mg}=Fs.actions,et=Fs.reducer});function ln(){return new Date().setHours(new Date().getHours()+24)}function un(o){ho.local.setItem({key:Ye.loginExpiresAt,data:o,expires:o})}var Hr=y(()=>{"use strict";n();Fo();Wo()});var Us,Bs,Gs,hI,Og,Wg,Hs,TI,Fg,Vs,xI,yI,SI,nt,tt=y(()=>{"use strict";n();Us=require("@reduxjs/toolkit");Hr();F();G();Bs={loginMethod:"",walletConnectLogin:null,ledgerLogin:null,tokenLogin:null,walletLogin:null,extensionLogin:null,passkeyLogin:null,operaLogin:null,crossWindowLogin:null,iframeWindowLogin:null,isLoginSessionInvalid:!1,webviewLogin:null},Gs=(0,Us.createSlice)({name:"loginInfoSlice",initialState:Bs,reducers:{setLoginMethod:(o,e)=>{o.loginMethod=e.payload},setTokenLogin:(o,e)=>{o.tokenLogin=e.payload},setTokenLoginSignature:(o,e)=>{(o==null?void 0:o.tokenLogin)!=null&&(o.tokenLogin.signature=e.payload)},setWalletLogin:(o,e)=>{o.walletLogin=e.payload},setWalletConnectLogin:(o,e)=>{o.walletConnectLogin=e.payload},setLedgerLogin:(o,e)=>{o.ledgerLogin=e.payload},setWebviewLogin:(o,e)=>{o.webviewLogin=e.payload},invalidateLoginSession:o=>{o.isLoginSessionInvalid=!0},setLogoutRoute:(o,e)=>{o.logoutRoute=e.payload},setIsWalletConnectV2Initialized:(o,e)=>{o.isWalletConnectV2Initialized=e.payload}},extraReducers:o=>{o.addCase(U,()=>Bs),o.addCase(pe,(e,t)=>{e.isLoginSessionInvalid=!1,e.loginMethod=t.payload.loginMethod,e.iframeLoginType=t.payload.iframeLoginType,un(ln())})}}),{setLoginMethod:hI,setWalletConnectLogin:Og,setLedgerLogin:Wg,setTokenLogin:Hs,setTokenLoginSignature:TI,setWalletLogin:Fg,invalidateLoginSession:Vs,setLogoutRoute:xI,setIsWalletConnectV2Initialized:yI,setWebviewLogin:SI}=Gs.actions,nt=Gs.reducer});var qs,$s,js,AI,Bg,II,Ug,rt,at=y(()=>{"use strict";n();qs=require("@reduxjs/toolkit");G();$s={},js=(0,qs.createSlice)({name:"modalsSlice",initialState:$s,reducers:{setTxSubmittedModal:(o,e)=>{o.txSubmittedModal=e.payload},setNotificationModal:(o,e)=>{o.notificationModal=e.payload},clearTxSubmittedModal:o=>{o.txSubmittedModal=void 0},clearNotificationModal:o=>{o.notificationModal=void 0}},extraReducers:o=>{o.addCase(U,()=>$s)}}),{setTxSubmittedModal:AI,setNotificationModal:Bg,clearTxSubmittedModal:II,clearNotificationModal:Ug}=js.actions,rt=js.reducer});var $,Y=y(()=>{"use strict";n();fo();$=()=>{if(!Fe())return{pathname:"",hash:"",origin:"",href:"",search:""};let{location:{pathname:e,hash:t,origin:r,href:s,search:p}}=window;return{pathname:e,hash:t,origin:r,href:s,search:p}}});var zs=y(()=>{"use strict";n();Y()});var Ks=y(()=>{"use strict";n();Q()});var Xs=y(()=>{"use strict";n();Ro()});var Q=y(()=>{"use strict";n();zs();Ks();Y();Xs()});var fn=y(()=>{"use strict";n();Q()});var Zs=y(()=>{"use strict";n();fn()});function Js(o){return o[Math.floor(Math.random()*o.length)]}var Qs=y(()=>{"use strict";n()});var Vr=y(()=>{"use strict";n();_r()});var He=y(()=>{"use strict";n();Zs();Qs();Vr()});var ep,op,np,$r,Hg,tp,rk,ak,Vg,it,ct=y(()=>{"use strict";n();ep=require("@reduxjs/toolkit"),op=h(require("lodash.omit")),np=require("redux-persist");Gn();G();He();$r={id:"not-configured",chainId:"",name:"NOT CONFIGURED",egldLabel:"",decimals:"18",digits:"4",gasPerDataByte:"1500",walletConnectDeepLink:"",walletConnectBridgeAddress:"",walletConnectV2RelayAddress:"",walletConnectV2ProjectId:"",walletConnectV2Options:{},walletAddress:"",apiAddress:"",explorerAddress:"",apiTimeout:"4000",roundDuration:6e3},Hg={network:$r},tp=(0,ep.createSlice)({name:"appConfig",initialState:Hg,reducers:{initializeNetworkConfig:(o,e)=>{let t=Js(e.payload.walletConnectV2RelayAddresses),r=(0,op.default)(e.payload,"walletConnectV2RelayAddresses");o.network=I(g(g({},o.network),r),{walletConnectV2RelayAddress:t})},updateNetworkConfig:(o,e)=>{o.network=g(g({},o.network),e.payload)},setCustomWalletAddress:(o,e)=>{o.network.customWalletAddress=e.payload}},extraReducers:o=>{o.addCase(U,e=>{e.network.customWalletAddress=void 0}),o.addCase(np.REHYDRATE,(e,t)=>{var s,p;if(!((p=(s=t.payload)==null?void 0:s.network)!=null&&p.customWalletAddress))return;let{network:{customWalletAddress:r}}=t.payload;e.network.customWalletAddress=r})}}),{initializeNetworkConfig:rk,updateNetworkConfig:ak,setCustomWalletAddress:Vg}=tp.actions,it=tp.reducer});var rp,qr,ap,dk,_k,lk,st,pt=y(()=>{"use strict";n();rp=require("@reduxjs/toolkit");B();G();qr={isSigning:!1,signedSessions:{}},ap=(0,rp.createSlice)({name:"signedMessageInfoSliceState",initialState:qr,reducers:{setSignSession:(o,e)=>{let{sessionId:t,signedSession:r,errorMessage:s}=e.payload;s&&(o.errorMessage=s),o.isSigning=r.status==="pending",o.signedSessions[t]=g(g({},o.signedSessions[t]),r)},setSignSessionState:(o,e)=>g(g({},o),e.payload),clearSignedMessageInfo:()=>qr},extraReducers:o=>{o.addCase(U,()=>qr)}}),{setSignSession:dk,clearSignedMessageInfo:_k,setSignSessionState:lk}=ap.actions,st=ap.reducer});var cp,sp,ip,pp,$g,qg,yk,jg,mt,dt=y(()=>{"use strict";n();cp=require("@reduxjs/toolkit"),sp=require("redux-persist");B();Yn();G();ip={customToasts:[],transactionToasts:[]},pp=(0,cp.createSlice)({name:"toastsSlice",initialState:ip,reducers:{addCustomToast:(o,e)=>{let t=e.payload.toastId||`custom-toast-${o.customToasts.length+1}`,r=o.customToasts.findIndex(s=>s.toastId===t);if(r!==-1){o.customToasts[r]=I(g(g({},o.customToasts[r]),e.payload),{type:"custom",toastId:t});return}o.customToasts.push(I(g({},e.payload),{type:"custom",toastId:t}))},removeCustomToast:(o,e)=>{o.customToasts=o.customToasts.filter(t=>t.toastId!==e.payload)},addTransactionToast:(o,e)=>{o.transactionToasts.push({type:"transaction",startTimestamp:_n(),toastId:e.payload||`custom-toast-${o.transactionToasts.length+1}`})},removeTransactionToast:(o,e)=>{o.transactionToasts=o.transactionToasts.filter(t=>t.toastId!==e.payload)}},extraReducers:o=>{o.addCase(U,()=>ip),o.addCase(sp.REHYDRATE,(e,t)=>{var s,p;let r=(p=(s=t.customToasts)==null?void 0:s.filter(m=>!("component"in m)))!=null?p:[];e.customToasts=r})}}),{addCustomToast:$g,removeCustomToast:qg,addTransactionToast:yk,removeTransactionToast:jg}=pp.actions,mt=pp.reducer});var mp,zr,Kr,Xr,zg,jr,dp,wk,Kg,Yr,_t,lt=y(()=>{"use strict";n();mp=require("@reduxjs/toolkit");G();zr="Transaction failed",Kr="Transaction successful",Xr="Processing transaction",zg="Transaction submitted",jr={},dp=(0,mp.createSlice)({name:"transactionsInfo",initialState:jr,reducers:{setTransactionsDisplayInfo(o,e){let{sessionId:t,transactionsDisplayInfo:r}=e.payload;t!=null&&(o[t]={errorMessage:(r==null?void 0:r.errorMessage)||zr,successMessage:(r==null?void 0:r.successMessage)||Kr,processingMessage:(r==null?void 0:r.processingMessage)||Xr,submittedMessage:(r==null?void 0:r.submittedMessage)||zg,transactionDuration:r==null?void 0:r.transactionDuration})},clearTransactionsInfoForSessionId(o,e){e.payload!=null&&delete o[e.payload]},clearTransactionsInfo:()=>jr},extraReducers:o=>{o.addCase(U,()=>jr)}}),{clearTransactionsInfo:wk,setTransactionsDisplayInfo:Kg,clearTransactionsInfoForSessionId:Yr}=dp.actions,_t=dp.reducer});function Uo(o){return o!=null&&(rh(o)||ph(o))}function Go(o){return o!=null&&(ah(o)||mh(o))}function Ho(o){return o!=null&&(ih(o)||dh(o))}function _p(o){return o!=null&&(ch(o)||_h(o))}function Zr(o){return o!=null&&sh(o)}function rh(o){return o!=null&&Xg.includes(o)}function ah(o){return o!=null&&Yg.includes(o)}function ih(o){return o!=null&&Zg.includes(o)}function ch(o){return o!=null&&Jg.includes(o)}function sh(o){return o!=null&&Qg.includes(o)}function ph(o){return o!=null&&eh.includes(o)}function mh(o){return o!=null&&oh.includes(o)}function dh(o){return o!=null&&nh.includes(o)}function _h(o){return o!=null&&th.includes(o)}var Xg,Yg,Zg,Jg,Qg,eh,oh,nh,th,Vo=y(()=>{"use strict";n();F();Xg=["sent"],Yg=["success"],Zg=["fail","cancelled","timedOut"],Jg=["invalid"],Qg=["timedOut"],eh=["pending"],oh=["success"],nh=["fail","invalid"],th=["not executed"]});var lp,up,gn,lh,fp,gp,hp,uh,ut,fh,gh,Pk,hh,hn,Jr,Rk,ft,gt=y(()=>{"use strict";n();lp=require("@reduxjs/toolkit"),up=require("redux-persist");F();Vo();G();gn={signedTransactions:{},transactionsToSign:null,signTransactionsError:null,signTransactionsCancelMessage:null,customTransactionInformationForSessionId:{}},lh={signWithoutSending:!1,sessionInformation:null,redirectAfterSign:!1},fp=(0,lp.createSlice)({name:"transactionsSlice",initialState:gn,reducers:{moveTransactionsToSignedState:(o,e)=>{var _,l;let{sessionId:t,transactions:r,errorMessage:s,status:p,redirectRoute:m,customTransactionInformation:d}=e.payload;o.customTransactionInformationForSessionId[t]=g(g(g({},lh),((_=o.signedTransactions[t])==null?void 0:_.customTransactionInformation)||{}),o.customTransactionInformationForSessionId[t]||{}),o.signedTransactions[t]={transactions:r,status:p,errorMessage:s,redirectRoute:m,customTransactionInformation:g(g({},o.customTransactionInformationForSessionId[t]),d!=null?d:{})},((l=o==null?void 0:o.transactionsToSign)==null?void 0:l.sessionId)===t&&(o.transactionsToSign=gn.transactionsToSign)},clearSignedTransaction:(o,e)=>{o.signedTransactions[e.payload]&&delete o.signedTransactions[e.payload]},clearTransactionToSign:o=>{o!=null&&o.transactionsToSign&&(o.transactionsToSign=null)},updateSignedTransaction:(o,e)=>{o.signedTransactions=g(g({},o.signedTransactions),e.payload)},updateSignedTransactions:(o,e)=>{let{sessionId:t,status:r,errorMessage:s,transactions:p}=e.payload;o.signedTransactions[t]!=null&&(o.signedTransactions[t].status=r,s!=null&&(o.signedTransactions[t].errorMessage=s),p!=null&&(o.signedTransactions[t].transactions=p))},updateSignedTransactionStatus:(o,e)=>{var l,f,T,v,A,x,M,P;let{sessionId:t,status:r,errorMessage:s,transactionHash:p,serverTransaction:m,inTransit:d}=e.payload,_=(f=(l=o.signedTransactions)==null?void 0:l[t])==null?void 0:f.transactions;if(_!=null){o.signedTransactions[t].transactions=_.map(E=>E.hash===p?I(g(g({},m!=null?m:{}),E),{status:r,errorMessage:s,inTransit:d}):E);let H=(v=(T=o.signedTransactions[t])==null?void 0:T.transactions)==null?void 0:v.every(E=>Go(E.status)),Z=(x=(A=o.signedTransactions[t])==null?void 0:A.transactions)==null?void 0:x.some(E=>Ho(E.status)),J=(P=(M=o.signedTransactions[t])==null?void 0:M.transactions)==null?void 0:P.every(E=>_p(E.status));H&&(o.signedTransactions[t].status="success"),Z&&(o.signedTransactions[t].status="fail"),J&&(o.signedTransactions[t].status="invalid")}},setTransactionsToSign:(o,e)=>{o.transactionsToSign=e.payload;let{sessionId:t,customTransactionInformation:r}=e.payload;o.customTransactionInformationForSessionId[t]=r,o.signTransactionsError=null},clearAllTransactionsToSign:o=>{o.transactionsToSign=gn.transactionsToSign,o.signTransactionsError=null},clearAllSignedTransactions:o=>{o.signedTransactions=gn.signedTransactions},setSignTransactionsError:(o,e)=>{o.signTransactionsError=e.payload},setSignTransactionsCancelMessage:(o,e)=>{o.signTransactionsCancelMessage=e.payload},updateSignedTransactionsCustomTransactionInformation:(o,e)=>{let{sessionId:t,customTransactionInformationOverrides:r}=e.payload;o.signedTransactions[t]!=null&&(o.signedTransactions[t].customTransactionInformation=g(g({},o.signedTransactions[t].customTransactionInformation),r))}},extraReducers:o=>{o.addCase(U,()=>gn),o.addCase(up.REHYDRATE,(e,t)=>{var m;if(e.signTransactionsCancelMessage=null,!((m=t.payload)!=null&&m.transactions))return;let{signedTransactions:r,customTransactionInformationForSessionId:s}=t.payload.transactions,p=Object.entries(r).reduce((d,[_,l])=>{let f=new Date(_),T=new Date;return T.setHours(T.getHours()+5),T-f>0||(d[_]=l),d},{});s!=null&&(e.customTransactionInformationForSessionId=s),r!=null&&(e.signedTransactions=p)})}}),{updateSignedTransactionStatus:gp,updateSignedTransactions:hp,setTransactionsToSign:uh,clearAllTransactionsToSign:ut,clearAllSignedTransactions:fh,clearSignedTransaction:gh,clearTransactionToSign:Pk,setSignTransactionsError:hh,setSignTransactionsCancelMessage:hn,moveTransactionsToSignedState:Jr,updateSignedTransactionsCustomTransactionInformation:Rk}=fp.actions,ft=fp.reducer});var Tp,Qr,xp,Fk,Bk,Th,Uk,ht,Tt=y(()=>{"use strict";n();Tp=require("@reduxjs/toolkit");G();Qr={},xp=(0,Tp.createSlice)({name:"batchTransactionsSlice",initialState:Qr,reducers:{setBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},updateBatchTransactions:(o,e)=>{o[e.payload.id]=e.payload},clearBatchTransactions:(o,e)=>{delete o[e.payload.batchId]},clearAllBatchTransactions:()=>Qr},extraReducers:o=>{o.addCase(U,()=>Qr)}}),{setBatchTransactions:Fk,updateBatchTransactions:Bk,clearBatchTransactions:Th,clearAllBatchTransactions:Uk}=xp.actions,ht=xp.reducer});var Sp,yp,bp,$k,vp,ea=y(()=>{"use strict";n();Sp=require("@reduxjs/toolkit");G();yp={},bp=(0,Sp.createSlice)({name:"dappConfigSlice",initialState:yp,reducers:{setDappConfig:(o,e)=>e.payload},extraReducers:o=>{o.addCase(U,()=>yp)}}),{setDappConfig:$k}=bp.actions,vp=bp.reducer});var R=y(()=>{"use strict";n();ot();tt();at();ct();pt();dt();lt();gt();Tt();ea()});var oa=y(()=>{"use strict";n()});var Ip,bh,vh,To,St=y(()=>{"use strict";n();Ip=require("@reduxjs/toolkit");oa();ot();Tt();ea();tt();at();ct();pt();dt();lt();gt();bh={["account"]:et,["dappConfig"]:vp,["loginInfo"]:nt,["modals"]:rt,["networkConfig"]:it,["signedMessageInfo"]:st,["toasts"]:mt,["transactionsInfo"]:_t,["transactions"]:ft,["batchTransactions"]:ht},vh=(o={})=>(0,Ip.combineReducers)(g(g({},bh),o)),To=vh});var Np={};W(Np,{default:()=>Bh,sessionStorageReducers:()=>na});function Ve(o,e=[]){return{key:o,version:1,storage:Lp.default,blacklist:e}}var ie,kp,Lp,wh,Tn,Ah,Ih,kh,Lh,Dh,Nh,Ch,Eh,Ph,Rh,Dp,Mh,na,Oh,Wh,Fh,Bh,Cp=y(()=>{"use strict";n();ie=require("redux-persist"),kp=h(require("redux-persist/lib/storage")),Lp=h(require("redux-persist/lib/storage/session"));St();R();ot();Tt();tt();at();ct();pt();dt();lt();gt();oa();wh={persistReducersStorageType:"localStorage"},Tn={["account"]:"sdk-dapp-account",["loginInfo"]:"sdk-dapp-login-info",["modals"]:"sdk-dapp-modals",["networkConfig"]:"sdk-dapp-network-config"},Ah=Ve(Tn["account"]),Ih=Ve(Tn["loginInfo"]),kh=Ve(Tn["modals"]),Lh=Ve(Tn["networkConfig"]),Dh={2:o=>I(g({},o),{networkConfig:$r})};Nh=Ve("sdk-dapp-transactionsInfo"),Ch=Ve("sdk-dapp-transactions",["transactionsToSign"]),Eh=Ve("sdk-dapp-batchTransactions",["batchTransactions"]),Ph=Ve("sdk-dapp-toasts"),Rh=Ve("sdk-dapp-signedMessageInfo"),Dp={key:"sdk-dapp-store",version:2,storage:kp.default,whitelist:Object.keys(Tn),migrate:(0,ie.createMigrate)(Dh,{debug:!1})},Mh=I(g({},Dp),{whitelist:[]}),na={["toasts"]:(0,ie.persistReducer)(Ph,mt),["transactions"]:(0,ie.persistReducer)(Ch,ft),["transactionsInfo"]:(0,ie.persistReducer)(Nh,_t),["batchTransactions"]:(0,ie.persistReducer)(Eh,ht),["signedMessageInfo"]:(0,ie.persistReducer)(Rh,st)},Oh=I(g({},na),{["account"]:(0,ie.persistReducer)(Ah,et),["loginInfo"]:(0,ie.persistReducer)(Ih,nt),["modals"]:(0,ie.persistReducer)(kh,rt),["networkConfig"]:(0,ie.persistReducer)(Lh,it)}),Wh=wh.persistReducersStorageType==="localStorage",Fh=Wh?(0,ie.persistReducer)(Dp,To(na)):(0,ie.persistReducer)(Mh,To(Oh)),Bh=Fh});var Ep={};W(Ep,{default:()=>Uh});var Uh,Pp=y(()=>{"use strict";n();St();Uh=To()});var Rp={};W(Rp,{default:()=>Hh});var ue,Gh,Hh,Mp=y(()=>{"use strict";n();ue=require("redux-persist"),Gh=[ue.FLUSH,ue.REHYDRATE,ue.PAUSE,ue.PERSIST,ue.PURGE,ue.REGISTER],Hh=Gh});var Fp={};W(Fp,{default:()=>Wp});function Wp(o){return(0,Op.persistStore)(o)}var Op,Bp=y(()=>{"use strict";n();Op=require("redux-persist")});var jm=b((EW,qm)=>{n();var Ix=qn(),kx=Sr(),Lx=br(),Dx="[object String]";function Nx(o){return typeof o=="string"||!kx(o)&&Lx(o)&&Ix(o)==Dx}qm.exports=Nx});var Bt=b((CF,Zm)=>{n();function Xx(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}Zm.exports=Xx});var Qm=b((EF,Jm)=>{n();var Yx=qn(),Zx=Bt(),Jx="[object AsyncFunction]",Qx="[object Function]",ey="[object GeneratorFunction]",oy="[object Proxy]";function ny(o){if(!Zx(o))return!1;var e=Yx(o);return e==Qx||e==ey||e==Jx||e==oy}Jm.exports=ny});var od=b((PF,ed)=>{n();var ty=sn(),ry=ty["__core-js_shared__"];ed.exports=ry});var rd=b((RF,td)=>{n();var Ia=od(),nd=function(){var o=/[^.]+$/.exec(Ia&&Ia.keys&&Ia.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function ay(o){return!!nd&&nd in o}td.exports=ay});var id=b((MF,ad)=>{n();var iy=Function.prototype,cy=iy.toString;function sy(o){if(o!=null){try{return cy.call(o)}catch(e){}try{return o+""}catch(e){}}return""}ad.exports=sy});var sd=b((OF,cd)=>{n();var py=Qm(),my=rd(),dy=Bt(),_y=id(),ly=/[\\^$.*+?()[\]{}|]/g,uy=/^\[object .+?Constructor\]$/,fy=Function.prototype,gy=Object.prototype,hy=fy.toString,Ty=gy.hasOwnProperty,xy=RegExp("^"+hy.call(Ty).replace(ly,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yy(o){if(!dy(o)||my(o))return!1;var e=py(o)?xy:uy;return e.test(_y(o))}cd.exports=yy});var md=b((WF,pd)=>{n();function Sy(o,e){return o==null?void 0:o[e]}pd.exports=Sy});var Ut=b((FF,dd)=>{n();var by=sd(),vy=md();function wy(o,e){var t=vy(o,e);return by(t)?t:void 0}dd.exports=wy});var In=b((BF,_d)=>{n();var Ay=Ut(),Iy=Ay(Object,"create");_d.exports=Iy});var fd=b((UF,ud)=>{n();var ld=In();function ky(){this.__data__=ld?ld(null):{},this.size=0}ud.exports=ky});var hd=b((GF,gd)=>{n();function Ly(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e}gd.exports=Ly});var xd=b((HF,Td)=>{n();var Dy=In(),Ny="__lodash_hash_undefined__",Cy=Object.prototype,Ey=Cy.hasOwnProperty;function Py(o){var e=this.__data__;if(Dy){var t=e[o];return t===Ny?void 0:t}return Ey.call(e,o)?e[o]:void 0}Td.exports=Py});var Sd=b((VF,yd)=>{n();var Ry=In(),My=Object.prototype,Oy=My.hasOwnProperty;function Wy(o){var e=this.__data__;return Ry?e[o]!==void 0:Oy.call(e,o)}yd.exports=Wy});var vd=b(($F,bd)=>{n();var Fy=In(),By="__lodash_hash_undefined__";function Uy(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=Fy&&e===void 0?By:e,this}bd.exports=Uy});var Ad=b((qF,wd)=>{n();var Gy=fd(),Hy=hd(),Vy=xd(),$y=Sd(),qy=vd();function Zo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}Zo.prototype.clear=Gy;Zo.prototype.delete=Hy;Zo.prototype.get=Vy;Zo.prototype.has=$y;Zo.prototype.set=qy;wd.exports=Zo});var kd=b((jF,Id)=>{n();function jy(){this.__data__=[],this.size=0}Id.exports=jy});var Dd=b((zF,Ld)=>{n();function zy(o,e){return o===e||o!==o&&e!==e}Ld.exports=zy});var kn=b((KF,Nd)=>{n();var Ky=Dd();function Xy(o,e){for(var t=o.length;t--;)if(Ky(o[t][0],e))return t;return-1}Nd.exports=Xy});var Ed=b((XF,Cd)=>{n();var Yy=kn(),Zy=Array.prototype,Jy=Zy.splice;function Qy(o){var e=this.__data__,t=Yy(e,o);if(t<0)return!1;var r=e.length-1;return t==r?e.pop():Jy.call(e,t,1),--this.size,!0}Cd.exports=Qy});var Rd=b((YF,Pd)=>{n();var eS=kn();function oS(o){var e=this.__data__,t=eS(e,o);return t<0?void 0:e[t][1]}Pd.exports=oS});var Od=b((ZF,Md)=>{n();var nS=kn();function tS(o){return nS(this.__data__,o)>-1}Md.exports=tS});var Fd=b((JF,Wd)=>{n();var rS=kn();function aS(o,e){var t=this.__data__,r=rS(t,o);return r<0?(++this.size,t.push([o,e])):t[r][1]=e,this}Wd.exports=aS});var Ud=b((QF,Bd)=>{n();var iS=kd(),cS=Ed(),sS=Rd(),pS=Od(),mS=Fd();function Jo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}Jo.prototype.clear=iS;Jo.prototype.delete=cS;Jo.prototype.get=sS;Jo.prototype.has=pS;Jo.prototype.set=mS;Bd.exports=Jo});var Hd=b((eB,Gd)=>{n();var dS=Ut(),_S=sn(),lS=dS(_S,"Map");Gd.exports=lS});var qd=b((oB,$d)=>{n();var Vd=Ad(),uS=Ud(),fS=Hd();function gS(){this.size=0,this.__data__={hash:new Vd,map:new(fS||uS),string:new Vd}}$d.exports=gS});var zd=b((nB,jd)=>{n();function hS(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}jd.exports=hS});var Ln=b((tB,Kd)=>{n();var TS=zd();function xS(o,e){var t=o.__data__;return TS(e)?t[typeof e=="string"?"string":"hash"]:t.map}Kd.exports=xS});var Yd=b((rB,Xd)=>{n();var yS=Ln();function SS(o){var e=yS(this,o).delete(o);return this.size-=e?1:0,e}Xd.exports=SS});var Jd=b((aB,Zd)=>{n();var bS=Ln();function vS(o){return bS(this,o).get(o)}Zd.exports=vS});var e_=b((iB,Qd)=>{n();var wS=Ln();function AS(o){return wS(this,o).has(o)}Qd.exports=AS});var n_=b((cB,o_)=>{n();var IS=Ln();function kS(o,e){var t=IS(this,o),r=t.size;return t.set(o,e),this.size+=t.size==r?0:1,this}o_.exports=kS});var r_=b((sB,t_)=>{n();var LS=qd(),DS=Yd(),NS=Jd(),CS=e_(),ES=n_();function Qo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var r=o[e];this.set(r[0],r[1])}}Qo.prototype.clear=LS;Qo.prototype.delete=DS;Qo.prototype.get=NS;Qo.prototype.has=CS;Qo.prototype.set=ES;t_.exports=Qo});var i_=b((pB,a_)=>{n();var PS="__lodash_hash_undefined__";function RS(o){return this.__data__.set(o,PS),this}a_.exports=RS});var s_=b((mB,c_)=>{n();function MS(o){return this.__data__.has(o)}c_.exports=MS});var m_=b((dB,p_)=>{n();var OS=r_(),WS=i_(),FS=s_();function Gt(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new OS;++e<t;)this.add(o[e])}Gt.prototype.add=Gt.prototype.push=WS;Gt.prototype.has=FS;p_.exports=Gt});var __=b((_B,d_)=>{n();function BS(o,e,t,r){for(var s=o.length,p=t+(r?1:-1);r?p--:++p<s;)if(e(o[p],p,o))return p;return-1}d_.exports=BS});var u_=b((lB,l_)=>{n();function US(o){return o!==o}l_.exports=US});var g_=b((uB,f_)=>{n();function GS(o,e,t){for(var r=t-1,s=o.length;++r<s;)if(o[r]===e)return r;return-1}f_.exports=GS});var T_=b((fB,h_)=>{n();var HS=__(),VS=u_(),$S=g_();function qS(o,e,t){return e===e?$S(o,e,t):HS(o,VS,t)}h_.exports=qS});var y_=b((gB,x_)=>{n();var jS=T_();function zS(o,e){var t=o==null?0:o.length;return!!t&&jS(o,e,0)>-1}x_.exports=zS});var b_=b((hB,S_)=>{n();function KS(o,e,t){for(var r=-1,s=o==null?0:o.length;++r<s;)if(t(e,o[r]))return!0;return!1}S_.exports=KS});var w_=b((TB,v_)=>{n();function XS(o,e){return o.has(e)}v_.exports=XS});var I_=b((xB,A_)=>{n();var YS=Ut(),ZS=sn(),JS=YS(ZS,"Set");A_.exports=JS});var L_=b((yB,k_)=>{n();function QS(){}k_.exports=QS});var ka=b((SB,D_)=>{n();function eb(o){var e=-1,t=Array(o.size);return o.forEach(function(r){t[++e]=r}),t}D_.exports=eb});var C_=b((bB,N_)=>{n();var La=I_(),ob=L_(),nb=ka(),tb=1/0,rb=La&&1/nb(new La([,-0]))[1]==tb?function(o){return new La(o)}:ob;N_.exports=rb});var P_=b((vB,E_)=>{n();var ab=m_(),ib=y_(),cb=b_(),sb=w_(),pb=C_(),mb=ka(),db=200;function _b(o,e,t){var r=-1,s=ib,p=o.length,m=!0,d=[],_=d;if(t)m=!1,s=cb;else if(p>=db){var l=e?null:pb(o);if(l)return mb(l);m=!1,s=sb,_=new ab}else _=e?[]:d;e:for(;++r<p;){var f=o[r],T=e?e(f):f;if(f=t||f!==0?f:0,m&&T===T){for(var v=_.length;v--;)if(_[v]===T)continue e;e&&_.push(T),d.push(f)}else s(_,T,t)||(_!==d&&_.push(T),d.push(f))}return d}E_.exports=_b});var M_=b((wB,R_)=>{n();var lb=P_();function ub(o){return o&&o.length?lb(o):[]}R_.exports=ub});var je={};W(je,{css:()=>z_,default:()=>Xb});var z_,Xb,ze=y(()=>{"use strict";n();z_=`.dapp-core-component__dappModalStyles__dappModal {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(z_));Xb={dappModal:"dapp-core-component__dappModalStyles__dappModal",dappModalContent:"dapp-core-component__dappModalStyles__dappModalContent",dappModalHeader:"dapp-core-component__dappModalStyles__dappModalHeader",dappModalHeaderText:"dapp-core-component__dappModalStyles__dappModalHeaderText",dappModalBody:"dapp-core-component__dappModalStyles__dappModalBody",dappModalFooter:"dapp-core-component__dappModalStyles__dappModalFooter",dappModalCloseButton:"dapp-core-component__dappModalStyles__dappModalCloseButton"}});var Wa={};W(Wa,{css:()=>sl,default:()=>u0});var sl,u0,Fa=y(()=>{"use strict";n();sl=`@keyframes dapp-core-component__loadingDotsStyle__dot-flashing {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sl));u0={loadingDots:"dapp-core-component__loadingDotsStyle__loadingDots",loadingDot:"dapp-core-component__loadingDotsStyle__loadingDot","dot-flashing":"dapp-core-component__loadingDotsStyle__dot-flashing",dotFlashing:"dapp-core-component__loadingDotsStyle__dot-flashing","loadingDot-0":"dapp-core-component__loadingDotsStyle__loadingDot-0",loadingDot0:"dapp-core-component__loadingDotsStyle__loadingDot-0","loadingDot-1":"dapp-core-component__loadingDotsStyle__loadingDot-1",loadingDot1:"dapp-core-component__loadingDotsStyle__loadingDot-1","loadingDot-2":"dapp-core-component__loadingDotsStyle__loadingDot-2",loadingDot2:"dapp-core-component__loadingDotsStyle__loadingDot-2"}});var Ua={};W(Ua,{css:()=>pl,default:()=>g0});var pl,g0,Ga=y(()=>{"use strict";n();pl=`.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel {
  color: #a3a3a3;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel .dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue {
  color: #a5fcf0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pl));g0={confirmAmountLabel:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabel",confirmAmountLabelValue:"dapp-core-component__confirmAmountLabelStyles__confirmAmountLabelValue"}});var Ha={};W(Ha,{css:()=>_l,default:()=>x0});var _l,x0,Va=y(()=>{"use strict";n();_l=`.dapp-core-component__balanceStyles__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_l));x0={balance:"dapp-core-component__balanceStyles__balance",balanceApproximation:"dapp-core-component__balanceStyles__balanceApproximation",balanceSymbol:"dapp-core-component__balanceStyles__balanceSymbol",balanceDecimals:"dapp-core-component__balanceStyles__balanceDecimals",balanceSuffix:"dapp-core-component__balanceStyles__balanceSuffix",balanceSuffixSup:"dapp-core-component__balanceStyles__balanceSuffixSup"}});var qa={};W(qa,{css:()=>gl,default:()=>b0});var gl,b0,ja=y(()=>{"use strict";n();gl=`.dapp-core-component__confirmAmountDataStyles__confirmAmountData {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gl));b0={confirmAmountData:"dapp-core-component__confirmAmountDataStyles__confirmAmountData",confirmAmountDataWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataWrapper",confirmAmountDataIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIcon",confirmAmountDataIconDefault:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefault",confirmAmountDataIconDefaultIcon:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataIconDefaultIcon",confirmAmountDataBalanceWrapper:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalanceWrapper",confirmAmountDataBalance:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataBalance",confirmAmountDataPrice:"dapp-core-component__confirmAmountDataStyles__confirmAmountDataPrice"}});var za={};W(za,{css:()=>Sl,default:()=>w0});var Sl,w0,Ka=y(()=>{"use strict";n();Sl=`.dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sl));w0={confirmAmountNftSft:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSft",confirmAmountNftSftIcon:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIcon",confirmAmountNftSftWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftWrapper",confirmAmountNftSftIconWrapper:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconWrapper",confirmAmountNftSftIconRelative:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconRelative",confirmAmountNftSftIconText:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftIconText",confirmAmountNftSftContent:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftContent",confirmAmountNftSftName:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftName",confirmAmountNftSftTicker:"dapp-core-component__confirmAmountNftSftStyles__confirmAmountNftSftTicker"}});var Xa={};W(Xa,{css:()=>Ll,default:()=>I0});var Ll,I0,Ya=y(()=>{"use strict";n();Ll=`.dapp-core-component__confirmAmountStyles__confirmAmount {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ll));I0={confirmAmount:"dapp-core-component__confirmAmountStyles__confirmAmount",confirmAmountWrapper:"dapp-core-component__confirmAmountStyles__confirmAmountWrapper",confirmAmountLoading:"dapp-core-component__confirmAmountStyles__confirmAmountLoading",confirmAmountLoadingVisible:"dapp-core-component__confirmAmountStyles__confirmAmountLoadingVisible",confirmAmountContent:"dapp-core-component__confirmAmountStyles__confirmAmountContent",confirmAmountContentHidden:"dapp-core-component__confirmAmountStyles__confirmAmountContentHidden"}});var Ja={};W(Ja,{css:()=>Nl,default:()=>L0});var Nl,L0,Qa=y(()=>{"use strict";n();Nl=`.dapp-core-component__confirmFeeStyles__confirmFee {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nl));L0={confirmFee:"dapp-core-component__confirmFeeStyles__confirmFee",confirmFeeLabel:"dapp-core-component__confirmFeeStyles__confirmFeeLabel",confirmFeeData:"dapp-core-component__confirmFeeStyles__confirmFeeData",confirmFeeDataPriceWrapper:"dapp-core-component__confirmFeeStyles__confirmFeeDataPriceWrapper",confirmFeeDataPrice:"dapp-core-component__confirmFeeStyles__confirmFeeDataPrice"}});var ei={};W(ei,{css:()=>Pl,default:()=>N0});var Pl,N0,oi=y(()=>{"use strict";n();Pl=`.dapp-core-component__explorerLinkStyles__link .dapp-core-component__explorerLinkStyles__search {
  color: #6c757d;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pl));N0={link:"dapp-core-component__explorerLinkStyles__link",search:"dapp-core-component__explorerLinkStyles__search"}});var ti={};W(ti,{css:()=>Fl,default:()=>E0});var Fl,E0,ri=y(()=>{"use strict";n();Fl=`.dapp-core-component__trim-styles__trim {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fl));E0={trim:"dapp-core-component__trim-styles__trim",overflow:"dapp-core-component__trim-styles__overflow",ellipsis:"dapp-core-component__trim-styles__ellipsis",left:"dapp-core-component__trim-styles__left",right:"dapp-core-component__trim-styles__right","hidden-text-ref":"dapp-core-component__trim-styles__hidden-text-ref",hiddenTextRef:"dapp-core-component__trim-styles__hidden-text-ref","trim-wrapper":"dapp-core-component__trim-styles__trim-wrapper",trimWrapper:"dapp-core-component__trim-styles__trim-wrapper","text-primary":"dapp-core-component__trim-styles__text-primary",textPrimary:"dapp-core-component__trim-styles__text-primary",table:"dapp-core-component__trim-styles__table","trim-only-sm":"dapp-core-component__trim-styles__trim-only-sm",trimOnlySm:"dapp-core-component__trim-styles__trim-only-sm","trim-fs-sm":"dapp-core-component__trim-styles__trim-fs-sm",trimFsSm:"dapp-core-component__trim-styles__trim-fs-sm","trim-size-xl":"dapp-core-component__trim-styles__trim-size-xl",trimSizeXl:"dapp-core-component__trim-styles__trim-size-xl"}});var ai={};W(ai,{css:()=>Gl,default:()=>R0});var Gl,R0,ii=y(()=>{"use strict";n();Gl=`.dapp-core-component__confirmReceiverStyles__receiver {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gl));R0={receiver:"dapp-core-component__confirmReceiverStyles__receiver",receiverLabelWrapper:"dapp-core-component__confirmReceiverStyles__receiverLabelWrapper",receiverLabel:"dapp-core-component__confirmReceiverStyles__receiverLabel",receiverLabelScam:"dapp-core-component__confirmReceiverStyles__receiverLabelScam",receiverLabelScamIcon:"dapp-core-component__confirmReceiverStyles__receiverLabelScamIcon",receiverWrapper:"dapp-core-component__confirmReceiverStyles__receiverWrapper",receiverData:"dapp-core-component__confirmReceiverStyles__receiverData",receiverDataIcon:"dapp-core-component__confirmReceiverStyles__receiverDataIcon",receiverCopy:"dapp-core-component__confirmReceiverStyles__receiverCopy",receiverExternal:"dapp-core-component__confirmReceiverStyles__receiverExternal"}});var ci={};W(ci,{css:()=>jl,default:()=>O0});var jl,O0,si=y(()=>{"use strict";n();jl=`.dapp-core-component__signStepBodyStyles__summary {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
}
.dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__signStepBodyStyles__summary .dapp-core-component__signStepBodyStyles__buttons {
    margin-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jl));O0={summary:"dapp-core-component__signStepBodyStyles__summary",fields:"dapp-core-component__signStepBodyStyles__fields",buttons:"dapp-core-component__signStepBodyStyles__buttons"}});var pi={};W(pi,{css:()=>Yl,default:()=>F0});var Yl,F0,mi=y(()=>{"use strict";n();Yl=`.dapp-core-component__progressHeaderStyles__progress-steps {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
  margin-top: 16px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step {
  text-align: left;
  display: flex;
  flex: 1;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step:last-child .dapp-core-component__progressHeaderStyles__progress-step-wrapper::after {
  content: none !important;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper {
  transition: all 200ms ease-out;
  position: relative;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper.dapp-core-component__progressHeaderStyles__detailed.dapp-core-component__progressHeaderStyles__collapsible:not(.dapp-core-component__progressHeaderStyles__completed):after {
  content: "";
  position: absolute;
  top: 9px;
  right: -20px;
  left: 28px;
  height: 2px;
  background-color: #737373;
  transition: all 200ms ease-out;
  border-radius: 2px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-wrapper.dapp-core-component__progressHeaderStyles__detailed.dapp-core-component__progressHeaderStyles__collapsible:not(.dapp-core-component__progressHeaderStyles__completed).dapp-core-component__progressHeaderStyles__active:after {
  background-color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 900;
  font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
  color: black;
  background-color: #737373;
  transition: all 200ms ease-out;
  position: relative;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index.dapp-core-component__progressHeaderStyles__active {
  background-color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-index .dapp-core-component__progressHeaderStyles__progress-step-check {
  color: #4ade80;
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title {
  margin-top: 8px;
  line-height: 1;
  position: relative;
  padding-bottom: 8px;
  color: #737373;
  font-size: 12px;
  flex: 1;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__active {
  color: #e5e5e5;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__active:after {
  background-color: #737373;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible {
  height: 12px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible .dapp-core-component__progressHeaderStyles__progress-step-title-text {
  transition: all 200ms ease-out;
  transform-origin: top left;
  font-size: 0px;
  display: block;
  position: relative;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible.dapp-core-component__progressHeaderStyles__active .dapp-core-component__progressHeaderStyles__progress-step-title-text {
  font-size: 14px;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title.dapp-core-component__progressHeaderStyles__collapsible::after {
  content: none;
}
.dapp-core-component__progressHeaderStyles__progress-steps .dapp-core-component__progressHeaderStyles__progress-step .dapp-core-component__progressHeaderStyles__progress-step-title:after {
  width: 100%;
  height: 1px;
  transition: all 200ms ease-out;
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  background-color: #262626;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yl));F0={"progress-steps":"dapp-core-component__progressHeaderStyles__progress-steps",progressSteps:"dapp-core-component__progressHeaderStyles__progress-steps","progress-step":"dapp-core-component__progressHeaderStyles__progress-step",progressStep:"dapp-core-component__progressHeaderStyles__progress-step","progress-step-wrapper":"dapp-core-component__progressHeaderStyles__progress-step-wrapper",progressStepWrapper:"dapp-core-component__progressHeaderStyles__progress-step-wrapper",detailed:"dapp-core-component__progressHeaderStyles__detailed",collapsible:"dapp-core-component__progressHeaderStyles__collapsible",completed:"dapp-core-component__progressHeaderStyles__completed",active:"dapp-core-component__progressHeaderStyles__active","progress-step-index":"dapp-core-component__progressHeaderStyles__progress-step-index",progressStepIndex:"dapp-core-component__progressHeaderStyles__progress-step-index","progress-step-check":"dapp-core-component__progressHeaderStyles__progress-step-check",progressStepCheck:"dapp-core-component__progressHeaderStyles__progress-step-check","progress-step-title":"dapp-core-component__progressHeaderStyles__progress-step-title",progressStepTitle:"dapp-core-component__progressHeaderStyles__progress-step-title","progress-step-title-text":"dapp-core-component__progressHeaderStyles__progress-step-title-text",progressStepTitleText:"dapp-core-component__progressHeaderStyles__progress-step-title-text"}});var di={};W(di,{css:()=>eu,default:()=>U0});var eu,U0,_i=y(()=>{"use strict";n();eu=`.dapp-core-component__signWithDeviceModalStyles__wallet-connect {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__modal-container {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__formGroup {
  color: inherit;
}

.dapp-core-component__signWithDeviceModalStyles__title {
  margin-bottom: 32px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  color: #d4d4d4;
  line-height: 1.25;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__title {
    margin-bottom: 40px;
  }
}

.dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
  --modal-offset: calc(100vh - 32px);
  padding: 0 16px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 48px !important;
  min-height: min(820px, var(--modal-offset));
}
@media (min-width: 576px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
    min-height: min(680px, var(--modal-offset));
  }
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content {
    --modal-offset: calc(100vh - 64px);
    min-height: min(720px, var(--modal-offset));
    padding: 0 40px 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
  min-height: min(920px, var(--modal-offset));
}
@media (min-width: 576px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
    min-height: min(775px, var(--modal-offset));
  }
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__guarded {
    min-height: min(800px, var(--modal-offset));
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__spaced {
  padding: 16px 16px 32px;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content.dapp-core-component__signWithDeviceModalStyles__spaced {
    padding: 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  border-radius: 50%;
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: #d4d4d4;
  transition: all 200ms ease-out;
  position: absolute;
  top: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__back {
  margin-right: auto;
  left: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__close {
  margin-left: auto;
  right: 16px;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon.dapp-core-component__signWithDeviceModalStyles__disabled {
  opacity: 0.5;
  pointer-events: none;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon svg path {
  transition: all 200ms ease-out;
  fill: #737373;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon:hover {
  background-color: #262626;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon:hover svg path {
  fill: #23f7dd;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  margin-top: auto;
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-submit {
  transition: all 200ms ease-out;
  margin: 32px auto 0;
  align-self: center;
  line-height: 1;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  order: -1;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-submit {
    margin-top: 40px;
  }
}
.dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-cancel {
  background: transparent;
  transition: all 200ms ease-out;
  border: none;
  color: #23f7dd;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  text-align: center;
  padding: 0;
}
@media (min-width: 768px) {
  .dapp-core-component__signWithDeviceModalStyles__modal-layout-content .dapp-core-component__signWithDeviceModalStyles__sign-buttons .dapp-core-component__signWithDeviceModalStyles__sign-button-cancel {
    margin-top: 32px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eu));U0={"wallet-connect":"dapp-core-component__signWithDeviceModalStyles__wallet-connect",walletConnect:"dapp-core-component__signWithDeviceModalStyles__wallet-connect","modal-container":"dapp-core-component__signWithDeviceModalStyles__modal-container",modalContainer:"dapp-core-component__signWithDeviceModalStyles__modal-container",formGroup:"dapp-core-component__signWithDeviceModalStyles__formGroup",title:"dapp-core-component__signWithDeviceModalStyles__title","modal-layout-content":"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",modalLayoutContent:"dapp-core-component__signWithDeviceModalStyles__modal-layout-content",guarded:"dapp-core-component__signWithDeviceModalStyles__guarded",spaced:"dapp-core-component__signWithDeviceModalStyles__spaced","modal-layout-heading-icon":"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",modalLayoutHeadingIcon:"dapp-core-component__signWithDeviceModalStyles__modal-layout-heading-icon",back:"dapp-core-component__signWithDeviceModalStyles__back",close:"dapp-core-component__signWithDeviceModalStyles__close",disabled:"dapp-core-component__signWithDeviceModalStyles__disabled","sign-buttons":"dapp-core-component__signWithDeviceModalStyles__sign-buttons",signButtons:"dapp-core-component__signWithDeviceModalStyles__sign-buttons","sign-button-submit":"dapp-core-component__signWithDeviceModalStyles__sign-button-submit",signButtonSubmit:"dapp-core-component__signWithDeviceModalStyles__sign-button-submit","sign-button-cancel":"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel",signButtonCancel:"dapp-core-component__signWithDeviceModalStyles__sign-button-cancel"}});var V0={};W(V0,{SignStep:()=>H0});module.exports=O(V0);n();var j=h(require("react")),Kt=require("@fortawesome/free-solid-svg-icons"),li=require("@fortawesome/react-fontawesome"),ko=h(require("classnames"));k();n();var gc=h(require("react"));n();var cn=h(require("react"));n();fo();var lc=()=>!Fe();var Ju=()=>S(void 0,null,function*(){return yield Promise.resolve().then(()=>(xr(),Tr))}),Qu=()=>(xr(),O(Tr)).default,yr=lc();function fc({ssrGlobalImportCallback:o,ssrImportCallback:e,clientImportCallback:t}){let[r,s]=cn.default.useState(yr?void 0:Qu()),[p,m]=cn.default.useState(yr||t==null?void 0:t()),d=()=>S(this,null,function*(){(o?o():Ju()).then(_=>s(_.default)),e==null||e().then(_=>m(_.default))});return(0,cn.useEffect)(()=>{yr&&d()},[]),{globalStyles:r,styles:p}}function L(o,e){return t=>{let{globalStyles:r,styles:s}=fc({ssrGlobalImportCallback:e.ssrGlobalStyles,ssrImportCallback:e.ssrStyles,clientImportCallback:e.clientStyles});return gc.default.createElement(o,I(g({},t),{globalStyles:r!=null?r:{},styles:s!=null?s:{}}))}}n();n();var to=h(require("react")),zl=require("@multiversx/sdk-core/out"),Kl=h(require("classnames"));n();n();n();var Ue=h(require("react")),hs=require("@fortawesome/free-solid-svg-icons"),Ts=require("@fortawesome/react-fontawesome"),xs=h(require("classnames")),Dr=h(ds());mr();B();n();n();ae();n();n();var ls=require("@multiversx/sdk-core/out"),kr=h(require("bignumber.js"));ae();n();var _s=require("@multiversx/sdk-core");function hg(o){try{let e=new _s.Address(o);return Boolean(e.bech32())}catch(e){return!1}}function Mo(o){return(o==null?void 0:o.length)===62&&/^\w+$/.test(o)&&hg(o)}n();n();function jn(o){try{let e=atob(o),t=btoa(e),r=a.Buffer.from(o,"base64").toString(),s=a.Buffer.from(r).toString("base64"),p=o===t||t.startsWith(o),m=o===s||s.startsWith(o);if(p&&m)return!0}catch(e){return!1}return!1}n();n();function zn(o){for(let e=0;e<o.length;e++)if(o.charCodeAt(e)>127)return!1;return!0}function mn(o){let e=o;try{let t=a.Buffer.from(o,"hex").toString();zn(t)&&t.length>1&&(e=t)}catch(t){}return e}n();n();var Be=(o,e,t)=>{switch(e){case"text":try{return a.Buffer.from(o,"hex").toString("utf8")}catch(r){}return o;case"decimal":return o!==""?new kr.default(o,16).toString(10):"";case"smart":try{let r=ls.Address.fromHex(o).toString();if(Mo(r))return r}catch(r){}try{let r=a.Buffer.from(o,"hex").toString("utf8");if(zn(r))return r;{if(t&&[...t.esdts,...t.nfts].some(m=>r.includes(m)))return r;let s=new kr.default(o,16);return s.isFinite()?s.toString(10):o}}catch(r){}return o;case"raw":default:return o}};n();B();n();var Tg=o=>o.toLowerCase().match(/^[0-9a-f]+$/i),xg=o=>o.length%2===0,us=o=>{let e=[];return o&&!Tg(o)&&e.push(`Invalid Hex characters on argument @${o}`),o&&!xg(o)&&e.push(`Odd number of Hex characters on argument @${o}`),e};n();B();var Kn=({parts:o,decodedParts:e,identifier:t})=>{let r=[...e];if(o[0]==="ESDTNFTTransfer"&&o[2]&&(r[2]=Be(o[2],"decimal")),t==="ESDTNFTTransfer"&&o[1]){let s=a.Buffer.from(String(o[1]),"base64");r[1]=Be(s.toString("hex"),"decimal")}return r};var gs=({parts:o,decodeMethod:e,identifier:t,display:r})=>{let s=o.map((m,d)=>{if(o.length>=2&&(d===0&&m.length<64||d===1&&!o[0]))return/[^a-z0-9]/gi.test(m)?Be(m,e):m;{let _=us(m);return _.length&&(r.validationWarnings=Array.from(new Set([...r.validationWarnings,..._]))),Be(m,e)}});return e==="smart"?Kn({parts:o,decodedParts:s,identifier:t}):s};var Lr=({input:o,decodeMethod:e,identifier:t})=>{let r={displayValue:"",validationWarnings:[]};if(!o.includes("@")&&!o.includes(`
`))return r.displayValue=Be(o,e),r;if(o.includes("@")){let s=o.split("@"),p=gs({parts:s,identifier:t,decodeMethod:e,display:r});r.displayValue=p.join("@")}if(o.includes(`
`)){let s=o.split(`
`),p=s.map(d=>{let _=a.Buffer.from(d,"base64");return e==="raw"?d:Be(_.toString("hex"),e)}),m=e==="smart"?Kn({parts:s,decodedParts:p,identifier:t}):p;r.displayValue=m.join(`
`)}return r};var ys=({className:o,data:e,onDecodeError:t,onDecode:r})=>{let s=(0,Dr.default)("raw".toString()),[p,m]=(0,Ue.useState)({label:s,value:s}),d=Object.values(ke).map(l=>{let f=l.toString();return{label:(0,Dr.default)(f),value:f}}),_=l=>{let f=d.find(T=>T.value===l.target.value);f&&m(f)};return(0,Ue.useEffect)(()=>{let{displayValue:l,validationWarnings:f}=Lr({input:e,decodeMethod:ke[p.value]});r(l),f.length>0&&t(f)},[p,e]),Ue.default.createElement("div",{className:(0,xs.default)("transaction-data-decode",o)},Ue.default.createElement("select",{className:"transaction-data-decode-select","data-testid":"transactionDataDecode",value:p.value,onChange:_},d.map(l=>Ue.default.createElement("option",{key:l.value,value:l.value},l.label))),Ue.default.createElement(Ts.FontAwesomeIcon,{icon:hs.faChevronDown,className:"transaction-data-decode-select-icon"}))};n();var C=h(require("react")),go=h(require("classnames"));k();n();n();var Oo=h(require("react")),Xn=require("@fortawesome/free-solid-svg-icons"),Er=require("@fortawesome/react-fontawesome"),vs=h(require("classnames"));n();fo();function yg(o){let e=!1,t=document==null?void 0:document.createElement("textarea");t.value=o,t.style.position="fixed",document==null||document.body.appendChild(t),t.focus(),t.select();try{document==null||document.execCommand("copy"),e=!0}catch(r){console.error("Fallback: Oops, unable to copy",r)}return document==null||document.body.removeChild(t),e}function Ss(o){return S(this,null,function*(){if(!Fe())return!1;let e=!1;return navigator.clipboard?e=yield navigator.clipboard.writeText(o).then(function(){return!0},function(r){return console.error("Async: Could not copy text: ",r),!1}):e=yg(o),e})}var bg=({text:o,className:e="dapp-copy-button",copyIcon:t=Xn.faCopy,successIcon:r=Xn.faCheck,styles:s})=>{let[p,m]=(0,Oo.useState)({default:!0,success:!1});return Oo.default.createElement("a",{href:"/#",onClick:_=>S(void 0,null,function*(){_.preventDefault(),_.stopPropagation();let l=o&&o.trim();m({default:!1,success:yield Ss(l)}),setTimeout(()=>{m({default:!0,success:!1})},1e3)}),className:(0,vs.default)(s==null?void 0:s.copy,e)},p.default||!p.success?Oo.default.createElement(Er.FontAwesomeIcon,{icon:t}):Oo.default.createElement(Er.FontAwesomeIcon,{icon:r}))},dn=L(bg,{ssrStyles:()=>Promise.resolve().then(()=>(Cr(),Nr)),clientStyles:()=>(Cr(),O(Nr)).default});n();var ws=({data:o,highlight:e,occurrences:t,transactionIndex:r})=>{let s=t[r]||o.indexOf(e),p=e.length,m=o.slice(0,s),d=o.slice(s+p);return{start:m,end:d}};var wg=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(r=>r.index).filter(r=>Number.isFinite(r)),Ag=({className:o="dapp-transaction-data",customCopyIcon:e,data:t,globalStyles:r,highlight:s,innerTransactionDataClasses:p,isScCall:m,label:d,showCopyButton:_=!0,styles:l,showDataDecode:f,transactionIndex:T})=>{let[v,A]=(0,C.useState)(t),{transactionDataInputLabelClassName:x,transactionDataInputValueClassName:M}=p||{},P=C.default.createElement(C.default.Fragment,null,v),[H,...Z]=s&&m?s.split("@"):[],J=v&&s,E=J?wg(v,s):[],Re=J&&E.length>0,ne=te=>{!te||te.scrollIntoView()},ao=te=>{A(te)},io=()=>{A(t)};if(Re)switch(!0){case v.startsWith(s):{let[,te]=v.split(s);P=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.highlighted},s),C.default.createElement("span",{className:r==null?void 0:r.textMuted},te));break}case v.endsWith(s):{let[te]=v.split(s);P=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.textMuted},te),C.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:ne},s));break}default:{let{start:te,end:Rn}=ws({occurrences:E,transactionIndex:T,data:v,highlight:s});P=C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:r==null?void 0:r.textMuted},te),C.default.createElement("span",{className:r==null?void 0:r.highlighted,ref:ne},s),C.default.createElement("span",{className:r==null?void 0:r.textMuted},Rn));break}}let co=[mn(H),...Z].join("@");return C.default.createElement(C.default.Fragment,null,H&&C.default.createElement("div",{className:(0,go.default)(l==null?void 0:l.transactionData,o)},C.default.createElement("span",{className:(0,go.default)(l==null?void 0:l.transactionDataLabel,x)},"Smart Contract Call"),C.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},C.default.createElement("div",{"data-testid":"confirmScCall",className:(0,go.default)(l==null?void 0:l.transactionDataValue,M)},C.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},co),v&&C.default.createElement(dn,{text:co,className:l==null?void 0:l.transactionDataValueCopy})))),C.default.createElement("div",{className:(0,go.default)(l==null?void 0:l.transactionData,o)},C.default.createElement("div",{className:(0,go.default)(l==null?void 0:l.transactionDataLabel,x)},d!=null?d:"Data",f&&C.default.createElement(ys,{data:t,onDecode:ao,onDecodeError:io})),C.default.createElement("div",{className:l==null?void 0:l.transactionDataValueWrapper},C.default.createElement("div",{"data-testid":"confirmData",className:(0,go.default)(l==null?void 0:l.transactionDataValue,M)},C.default.createElement("span",{className:l==null?void 0:l.transactionDataValueText},v?P:mc),v&&_&&C.default.createElement(dn,{copyIcon:e,text:v,className:l==null?void 0:l.transactionDataValueCopy})))))},Is=L(Ag,{ssrStyles:()=>Promise.resolve().then(()=>(Rr(),Pr)),clientStyles:()=>(Rr(),O(Pr)).default});n();n();var ks=require("react"),oe=h(require("classnames")),Ls=(o=null,e)=>(0,ks.useMemo)(()=>({formGroup:(0,oe.default)(e==null?void 0:e.formGroup,e==null?void 0:e.textBreak,e==null?void 0:e.textLeft),formLabel:(0,oe.default)(e==null?void 0:e.textBreak,e==null?void 0:e.textSecondary),icon:e==null?void 0:e.textWhite,contentWrapper:(0,oe.default)(e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.justifyContentStart,e==null?void 0:e.flexRow,e==null?void 0:e.justifyContentBetween,e==null?void 0:e.mb3),tokenWrapper:(0,oe.default)(e==null?void 0:e.mb3,e==null?void 0:e.mb0,e==null?void 0:e.dFlex,e==null?void 0:e.flexColumn,e==null?void 0:e.alignItemsStart),tokenLabel:(0,oe.default)(e==null?void 0:e.textSecondary,e==null?void 0:e.textLeft),tokenValue:(0,oe.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter),scamReport:e==null?void 0:e.textWarning,scamReportIcon:(0,oe.default)(e==null?void 0:e.textWarning,e==null?void 0:e.mr1),tokenAmountLabel:(0,oe.default)(e==null?void 0:e.textSecondary,e==null?void 0:e.textLeft),tokenAmountValue:(0,oe.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter),dataFormGroup:(0,oe.default)(e==null?void 0:e.formGroup,e==null?void 0:e.textLeft),errorMessage:(0,oe.default)(e==null?void 0:e.textDanger,e==null?void 0:e.dFlex,e==null?void 0:e.justifyContentCenter,e==null?void 0:e.alignItemsCenter),buttonsWrapper:(0,oe.default)(e==null?void 0:e.dFlex,e==null?void 0:e.alignItemsCenter,e==null?void 0:e.justifyContentEnd,e==null?void 0:e.mt1),cancelButton:(0,oe.default)(e==null?void 0:e.btn,e==null?void 0:e.btnDark,e==null?void 0:e.textWhite,e==null?void 0:e.dFlex,e==null?void 0:e.mr2),signButton:(0,oe.default)(e==null?void 0:e.btn,o?e==null?void 0:e.btnWarning:e==null?void 0:e.btnPrimary,e==null?void 0:e.dFlex,e==null?void 0:e.ml2)}),[o,e]);n();n();n();var Pe=h(require("react")),Za=h(require("classnames"));n();n();n();var qp=require("react"),$o=require("react-redux");n();var ta=require("@reduxjs/toolkit"),Vp=require("react-redux/lib/utils/Subscription");R();n();var wp=h(require("lodash.throttle"));k();R();Hr();Fo();Wo();var xh=[Vn],xt=!1,yh=(0,wp.default)(()=>{un(ln())},5e3),Ap=o=>e=>t=>{if(xh.includes(t.type))return e(t);let r=o.getState(),s=ho.local.getItem(Ye.loginExpiresAt);if(!Boolean(r==null?void 0:r.account.address))return e(t);if(s==null)return un(ln());let m=Date.now();return s-m<0&&!xt?setTimeout(()=>{xt=!0,o.dispatch(Vs())},1e3):(xt&&(xt=!1),yh()),e(t)};n();n();function yt(){return typeof sessionStorage!="undefined"}var Up=yt()?(Cp(),O(Np)).default:(Pp(),O(Ep)).default,Gp=yt()?(Mp(),O(Rp)).default:[],Hp=yt()?(Bp(),O(Fp)).default:o=>o;St();var D=(0,ta.configureStore)({reducer:Up,middleware:o=>o({serializableCheck:{ignoredActions:[...Gp,Gr.type,Qn.type],ignoredPaths:["payload.nonce","account.account.nonce","providers.accountProvider"]}}).concat(Ap)}),$p=(0,Vp.createSubscription)(D),HL=Hp(D),VL=(0,ta.configureStore)({reducer:To});var Vh={store:D,subscription:$p},ra=(0,qp.createContext)(Vh),zL=(0,$o.createStoreHook)(ra),ee=(0,$o.createDispatchHook)(ra),N=(0,$o.createSelectorHook)(ra);n();n();R();n();var jp=h(require("lodash.isequal")),bt=require("reselect"),w=(0,bt.createSelectorCreator)(bt.defaultMemoize,jp.default);var Ne=o=>o.account,xo=w(Ne,o=>o.address),qo=w(Ne,xo,(o,e)=>e in o.accounts?o.accounts[e]:Jn),$h=w(Ne,qo,(o,e)=>{let s=o,{accounts:t}=s,r=fe(s,["accounts"]);return I(g({},r),{address:e.address,account:e})}),JL=w(qo,o=>o.balance),qh=w(qo,o=>{var e;return((e=o==null?void 0:o.nonce)==null?void 0:e.valueOf())||0}),QL=w(Ne,o=>o.shard),jh=w(Ne,o=>o.ledgerAccount),eD=w(Ne,o=>o.walletConnectAccount),oD=w(Ne,o=>o.isAccountLoading),nD=w(Ne,o=>o.accountLoadingError),zh=w(Ne,o=>o.websocketEvent),Kh=w(Ne,o=>o.websocketBatchEvent);n();var zp=o=>o.dappConfig,aD=w(zp,o=>o.shouldUseWebViewProvider);n();var me=o=>o.loginInfo,Xh=w(me,o=>o.loginMethod),vt=w(me,xo,(o,e)=>Boolean(e)),pD=w(me,o=>o.walletConnectLogin),Yh=w(me,o=>o.ledgerLogin),Zh=w(me,o=>o.walletLogin),mD=w(me,o=>o.isLoginSessionInvalid),aa=w(me,o=>o.tokenLogin),Kp=w(me,o=>o.logoutRoute),Jh=w(me,o=>o.isWalletConnectV2Initialized);n();var Xp=o=>o.modals,lD=w(Xp,o=>o.txSubmittedModal),Qh=w(Xp,o=>o.notificationModal);n();var ge=o=>o.networkConfig,wt=w(ge,o=>o.network.chainId),eT=w(ge,o=>o.network.roundDuration),gD=w(ge,o=>o.network.walletConnectBridgeAddress),oT=w(ge,o=>o.network.walletConnectV2RelayAddress),nT=w(ge,o=>o.network.walletConnectV2ProjectId),tT=w(ge,o=>o.network.walletConnectV2Options),rT=w(ge,o=>o.network.walletConnectDeepLink),ce=w(ge,o=>o.network),ia=w(ce,o=>o.apiAddress),Yp=w(ce,o=>o.explorerAddress),Zp=w(ce,o=>{var e;return(e=o.customWalletAddress)!=null?e:o.walletAddress}),aT=w(ce,o=>o.xAliasAddress),ca=w(ce,o=>o.egldLabel);n();var At=o=>o.signedMessageInfo,xD=w(At,o=>o.isSigning),yD=w(At,o=>o.errorMessage),SD=w(At,o=>{let e=Object.keys(o.signedSessions),t=e.length;return o.signedSessions[e[t-1]]}),bD=w(At,o=>{let e=Object.keys(o.signedSessions),t=e.length;return e.length>0?e[t-1]:""});n();var Jp=o=>o.toasts,iT=w(Jp,o=>o.customToasts),Qp=w(Jp,o=>o.transactionToasts);n();R();var em={errorMessage:zr,successMessage:Kr,processingMessage:Xr},om=o=>o.transactionsInfo,cT=w(om,(o,e)=>e,(o,e)=>e!=null&&(o==null?void 0:o[Number(e)])||em);n();n();var Ce=require("@multiversx/sdk-core");k();n();var sa=require("@multiversx/sdk-core/out");var nm=o=>{let e=o!=null?o:"";return jn(e)?sa.TransactionPayload.fromEncoded(e):new sa.TransactionPayload(e)};n();k();var jo=({data:o,onlySetGuardian:e})=>o?e?o.startsWith("SetGuardian"):Object.values(dr).some(t=>o.startsWith(t)):!1;function It(o){var r,s,p;let e=g({},o);jo({data:e.data,onlySetGuardian:!0})&&(delete e.senderUsername,delete e.receiverUsername);let t=new Ce.Transaction(g(g(I(g(I(g({value:e.value.valueOf(),data:nm(e.data),nonce:e.nonce.valueOf(),receiver:new Ce.Address(e.receiver)},e.receiverUsername?{receiverUsername:e.receiverUsername}:{}),{sender:new Ce.Address(e.sender)}),e.senderUsername?{senderUsername:e.senderUsername}:{}),{gasLimit:(r=e.gasLimit.valueOf())!=null?r:rn,gasPrice:(s=e.gasPrice.valueOf())!=null?s:an,chainID:e.chainID.valueOf(),version:new Ce.TransactionVersion((p=e.version)!=null?p:sc)}),e.options?{options:new Ce.TransactionOptions(e.options)}:{}),e.guardian?{guardian:new Ce.Address(e.guardian)}:{}));return e.guardianSignature&&t.applyGuardianSignature(a.Buffer.from(e.guardianSignature,"hex")),e.signature&&t.applySignature(a.Buffer.from(e.signature,"hex")),t}n();n();k();n();n();n();var mT=require("@multiversx/sdk-core/out");n();k();n();var xn=require("@multiversx/sdk-core");B();var dT=["ESDTNFTTransfer","ESDTNFTBurn","ESDTNFTAddQuantity","ESDTNFTCreate","MultiESDTNFTTransfer","ESDTTransfer","ESDTBurn","ESDTLocalMint","ESDTLocalBurn","ESDTWipe","ESDTFreeze"];function pa(o,e,t=""){if(!Mo(o))return!1;if(new xn.Address(o).isContractAddress())return!0;let p=tm({receiver:o,data:t});return p?new xn.Address(p).isContractAddress()||uT(o,e,t):!1}var _T=o=>o.toLowerCase().match(/[0-9a-f]/g),lT=o=>o.length%2===0;function uT(o,e,t){let r=t==null?void 0:t.split("@");if(r==null)return!1;let[s,...p]=r,m=e!=null&&o!=null&&o===e,d=dT.includes(s),_=p.every(l=>_T(l)&&lT(l));return m&&d&&_}function tm({receiver:o,data:e}){try{if(!e)return o;let t=jn(e)?xn.TransactionPayload.fromEncoded(e).toString():e,r=fT(t),s=t.split("@");return r>-1?s[r]:o}catch(t){console.log(t);return}}function fT(o){return o.includes("MultiESDTNFTTransfer")?1:o.includes("ESDTNFTTransfer")?4:-1}n();n();n();var gT=require("@multiversx/sdk-core"),hT=h(require("bignumber.js"));F();n();n();n();var se="accounts";var kt="blocks",rm="code",am="collections";var im="contracts",yn="economics",cm="identities";var sm="locked-accounts",pm="logs",mm="miniblocks";var Sn="nfts",dm="nodes",ma="providers",_m="roles",da="sc-results";var Je="tokens";var he="transactions";var bn={shard:o=>`/${kt}?shard=${o}`,receiverShard:o=>`/${he}?receivershard=${o}`,senderShard:o=>`/${he}?sendershard=${o}`,transactionDetails:o=>`/${he}/${o}`,transactionDetailsScResults:o=>`/${he}/${o}/${da}`,transactionDetailsLogs:o=>`/${he}/${o}/${pm}`,nodeDetails:o=>`/${dm}/${o}`,accountDetails:o=>`/${se}/${o}`,accountDetailsContractCode:o=>`/${se}/${o}/${rm}`,accountDetailsTokens:o=>`/${se}/${o}/${Je}`,accountDetailsNfts:o=>`/${se}/${o}/${Sn}`,accountDetailsScResults:o=>`/${se}/${o}/${da}`,accountDetailsContracts:o=>`/${se}/${o}/${im}`,identityDetails:o=>`/${cm}/${o}`,tokenDetails:o=>`/${Je}/${o}`,tokenDetailsAccounts:o=>`/${Je}/${o}/${se}`,tokenDetailsLockedAccounts:o=>`/${Je}/${o}/${sm}`,tokenDetailsRoles:o=>`/${Je}/${o}/${_m}`,collectionDetails:o=>`/${am}/${o}`,nftDetails:o=>`/${Sn}/${o}`,providerDetails:o=>`/${ma}/${o}`,providerDetailsTransactions:o=>`/${ma}/${o}/${he}`,miniblockDetails:o=>`/${mm}/${o}`};n();n();n();n();ae();n();var lm=!1;function yT(o){lm||(console.error(o),lm=!0)}function vn({explorerAddress:o,to:e}){try{return new URL(e).href}catch(t){return e.startsWith("/")||(yT(`Link not prepended by / : ${e}`),e=`/${e}`),o?`${o}${e}`:e}}n();ae();n();n();n();var ST=h(require("bignumber.js"));k();n();var gm=require("@multiversx/sdk-core"),Qe=h(require("bignumber.js"));k();n();var fm=h(require("bignumber.js")),Dt=(o,e=!0)=>{let t=String(o);if(!t.match(/^[-]?\d+$/))return!1;let r=new fm.default(t),s=e?0:-1;return r.toString(10)===t&&r.comparedTo(0)>=s};n();function $e(o){return{if:function(e){return e?{then:t=>t instanceof Function?$e(t(o)):$e(t)}:{then:()=>$e(o)}},then:e=>e instanceof Function?$e(e(o)):$e(e),valueOf:function(){return o}}}Qe.default.config({ROUNDING_MODE:Qe.default.ROUND_FLOOR});function Te({input:o,decimals:e=_e,digits:t=uo,showLastNonZeroDecimal:r=!0,showIsLessThanDecimalsLabel:s=!1,addCommas:p=!1}){if(!Dt(o,!1))throw new Error("Invalid input");let m=new Qe.default(o).isNegative(),d=o;return m&&(d=o.substring(1)),$e(d).then(()=>gm.TokenTransfer.fungibleFromBigInteger("",d,e).amountAsBigInteger.shiftedBy(-e).toFixed(e)).then(_=>{let l=new Qe.default(_);if(l.isZero())return le;let f=l.toString(10),[T,v]=f.split("."),A=new Qe.default(v||0),x=$e(0).if(Boolean(v&&r)).then(()=>Math.max(v.length,t)).if(A.isZero()&&!r).then(0).if(Boolean(v&&!r)).then(()=>Math.min(v.length,t)).valueOf(),M=v&&t>=1&&t<=v.length&&A.isGreaterThan(0)&&new Qe.default(v.substring(0,t)).isZero(),P=l.toFormat(x);return $e(f).if(p).then(P).if(Boolean(M)).then(Z=>{let J=new Qe.default(T).isZero(),[E,Re]=Z.split("."),ne=new Array(t-1).fill(0),ao=[...ne,0].join(""),io=[...ne,1].join("");return J?s?`<${E}.${io}`:r?`${E}.${Re}`:E:`${E}.${ao}`}).if(Boolean(!M&&v)).then(Z=>{let[J]=Z.split("."),E=v.substring(0,x);if(r){let Re=t-E.length;if(Re>0){let ne=Array(Re).fill(0).join("");return E=`${E}${ne}`,`${J}.${E}`}return Z}return E?`${J}.${E}`:J}).valueOf()}).if(m).then(_=>`-${_}`).valueOf()}n();n();n();k();n();n();n();n();k();n();k();n();var bT=require("@multiversx/sdk-core");k();n();var xe=require("@multiversx/sdk-core"),xm=h(require("bignumber.js"));k();n();n();var _a=h(require("bignumber.js"));k();var hm=o=>{if(isNaN(o)||o==null||String(o).includes("Infinity"))return!1;let[e,t]=o.split("."),r=_a.default.clone();if(t){let d=t.split("").every(_=>!isNaN(parseInt(_)));for(r.set({DECIMAL_PLACES:d?t.length:_a.default.config().DECIMAL_PLACES});t.charAt(t.length-1)===le;)t=t.slice(0,-1)}let s=t?[e,t].join("."):e,p=r(s);return p.toString(10)===s&&p.comparedTo(0)>=0};n();k();n();var la={isEsdt:!1,isNft:!1,isEgld:!1};function ua(o){let e=o==null?void 0:o.split("-").length;return e===2?I(g({},la),{isEsdt:!0}):e===3?I(g({},la),{isNft:!0}):I(g({},la),{isEgld:!0})}var Tm={from:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",to:"erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"};function fa({minGasLimit:o=String(rn),gasLimit:e,gasPrice:t,data:r,gasPerDataByte:s,gasPriceModifier:p,defaultGasPrice:m=String(an),chainId:d}){let _=r||"",l=Dt(e)?e:o,f=jo({data:_})?hr:0,T=new xm.default(l).plus(f).toNumber(),v=hm(t)?t:m,A=new xe.Transaction({nonce:0,value:xe.TokenPayment.egldFromAmount("0"),receiver:new xe.Address(Tm.to),sender:new xe.Address(Tm.to),gasPrice:parseInt(v),gasLimit:T,data:new xe.TransactionPayload(_.trim()),chainID:d,version:new xe.TransactionVersion(1)});try{return A.computeFee({GasPerDataByte:parseInt(s),MinGasLimit:parseInt(o),GasPriceModifier:parseFloat(p),ChainID:d}).toString(10)}catch(x){return console.error(x),le}}n();var Nt=({amount:o,usd:e,decimals:t=2,addEqualSign:r})=>{let s=(parseFloat(o)*e).toFixed(t),p=parseFloat(s).toLocaleString("en",{maximumFractionDigits:t,minimumFractionDigits:t}),m=parseFloat(o)>0?"\u2248":"=";return`${r?`${m} `:""}$${p}`};n();n();n();n();k();n();k();var ym=({feeLimit:o,egldPriceInUsd:e,hideEqualSign:t})=>{let r=Te({input:o,decimals:_e,digits:uo,showLastNonZeroDecimal:!0}),s=Nt({amount:r,usd:e,decimals:uo});return t?s:`\u2248 ${s}`};n();k();n();ae();var vT=["reDelegateRewards","claimRewards","unBond"],wT=["wrapEgld","unwrapEgld"],AT=["unStake"],IT=["unDelegate"];n();n();n();k();n();var DT=h(require("bignumber.js"));n();n();ae();n();var CT=h(require("bignumber.js"));n();n();n();var RT=h(require("bignumber.js"));B();n();n();n();n();F();n();var FT=require("@multiversx/sdk-web-wallet-provider");k();n();var OT=h(require("qs"));n();Q();fo();n();fo();var IE={search:Fe()?window.location.search:"",removeParams:[]};n();n();n();Y();n();ae();n();n();Y();n();var BT=h(require("linkifyjs"));n();k();n();var UT=h(require("bignumber.js"));n();B();n();n();F();n();F();n();n();n();ae();n();ae();n();var GT=h(require("bignumber.js"));k();ae();n();ae();n();var bm=require("react");B();var GP=[{label:"Raw",value:"raw"},{label:"Text",value:"text"},{label:"Decimal",value:"decimal"},{label:"Smart",value:"smart"}];n();var vm=require("react");B();Y();n();var HT=require("react");ae();var XP=["create","localMint","ESDTLocalMint","addQuantity","burn","localBurn","ESDTLocalBurn","wipe","writeLog","signalError"];Vo();n();var Et=o=>o.transactions,zo=w(Et,o=>o.signedTransactions),VT=w(Et,o=>o.signTransactionsError),wm=w(Et,o=>o.signTransactionsCancelMessage),Pt=o=>e=>Object.entries(e).reduce((t,[r,s])=>(o(s.status)&&(t[r]=s),t),{}),Am=w(zo,Pt(Uo)),Im=w(zo,Pt(Go)),km=w(zo,Pt(Ho)),$T=w(zo,Pt(Zr)),Lm=w(Et,o=>{var e;return(o==null?void 0:o.transactionsToSign)==null?null:I(g({},o.transactionsToSign),{transactions:((e=o==null?void 0:o.transactionsToSign)==null?void 0:e.transactions.map(t=>It(t)))||[]})}),qT=w(zo,(o,e)=>e,(o,e)=>e!=null?(o==null?void 0:o[e])||{}:{});var qe=()=>N(ge);n();var Dm=require("react");n();R();n();n();n();n();n();n();n();n();var zT=require("@multiversx/sdk-extension-provider"),KT=require("@multiversx/sdk-hw-provider"),XT=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),YT=require("@multiversx/sdk-opera-provider"),ZT=require("@multiversx/sdk-passkey-provider/out"),JT=require("@multiversx/sdk-web-wallet-provider");k();Xe();n();var Ko=require("@multiversx/sdk-web-wallet-iframe-provider/out"),Nm=require("@multiversx/sdk-web-wallet-iframe-provider/out/constants");F();n();var ye=o=>`Unable to perform ${o}, Provider not initialized`,Rt=class{init(){return Promise.resolve(!1)}getAccount(){throw new Error(ye("getAccount"))}setAccount(e){throw new Error(ye(`setAccount: ${e}`))}login(e){throw new Error(ye(`login with options: ${e}`))}logout(e){throw new Error(ye(`logout with options: ${e}`))}getAddress(){throw new Error(ye("getAddress"))}isInitialized(){return!1}isConnected(){return!1}sendTransaction(e,t){throw new Error(ye(`sendTransaction with transactions: ${e} options: ${t}`))}signTransaction(e,t){throw new Error(ye(`signTransaction with transactions: ${e} options: ${t}`))}signTransactions(e,t){throw new Error(ye(`signTransactions with transactions: ${e} options: ${t}`))}signMessage(e,t){throw new Error(ye(`signTransactions with ${e} and options ${t}`))}sendCustomMessage({method:e,params:t}){throw new Error(ye(`sendCustomMessage with method: ${e} params: ${t}`))}sendCustomRequest(e){throw new Error(ye(`sendSessionEvent with options: ${e}`))}ping(){return Promise.resolve(!1)}},Cm=new Rt;R();n();n();n();n();n();var Em=require("@lifeomic/axios-fetch"),Ta=h(require("axios")),xa=(0,Em.buildAxiosFetch)(Ta.default),ya=(o,e)=>S(void 0,null,function*(){if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);let r=o.clone().json(),[s]=yield Promise.all([r]);return{data:s,status:o.status,statusText:o.statusText,headers:o.headers,config:e}});function QT(o,e,t){return S(this,null,function*(){try{let r=yield xa(o,g({method:"POST",body:e?JSON.stringify(e):void 0,headers:g({"Content-Type":"application/json"},(t==null?void 0:t.headers)||{})},t));return ya(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}function ex(o,e){return S(this,null,function*(){try{let t=yield xa(o,e);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return ya(t,e)}catch(t){throw console.error("Fetch Error:",t),t}})}function ox(o,e,t){return S(this,null,function*(){try{let r=yield xa(o,g({method:"PATCH",body:e?JSON.stringify(e):void 0,headers:(t==null?void 0:t.headers)||{}},t));if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return ya(r,t)}catch(r){throw console.error("Fetch Error:",r),r}})}var oo=Ta.default.create();oo.get=ex;oo.post=QT;oo.patch=ox;var Pm=o=>oo.get(o).then(e=>e.data);n();var Xo=o=>{let e=o!=null?o:ia(D.getState());return e.endsWith("/")?e.slice(0,-1):e};n();var nx=h(require("axios"));n();var Rm=h(require("swr"));var Yo=({apiEndpoint:o})=>{let e=Xo(),t=o?`${e}/${o}`:null;return(0,Rm.default)(t,Pm)};n();F();n();n();n();Y();n();Vo();n();n();n();var tx=h(require("axios"));n();var ax=h(require("axios"));Po();n();k();n();var ix=h(require("axios"));n();var sx=h(require("axios"));n();n();var px=h(require("axios"));n();var mx=h(require("axios"));n();n();R();F();n();n();n();n();Y();n();G();B();n();R();n();var Fm=require("@multiversx/sdk-core");B();Q();n();Vo();n();R();F();n();R();B();n();n();n();B();n();Gn();n();n();n();n();var Um=h(require("swr"));n();n();var Wt={},ba={setItem:(o,e)=>S(void 0,null,function*(){try{Wt[o]=JSON.stringify(e)}catch(t){console.error("tokenDataStorage unable to serialize",t)}}),getItem:o=>S(void 0,null,function*(){try{return JSON.parse(Wt[o])}catch(e){console.error("tokenDataStorage unable to parse",e)}}),clear:()=>S(void 0,null,function*(){Wt={}}),removeItem:o=>S(void 0,null,function*(){delete Wt[o]})};function Bm(o){return S(this,null,function*(){let{apiAddress:e,apiTimeout:t}=ce(D.getState()),r={baseURL:e,timeout:Number(t)},s=yield ba.getItem(o);if(s)return s;let p=yield oo.get(o,r);return yield ba.setItem(o,p.data),p.data})}function Gm({tokenId:o}){var T,v,A,x;let{network:e}=qe(),{isNft:t}=ua(o),r=o,s=t?Sn:Je,{data:p,error:m,isLoading:d}=(0,Um.default)(Boolean(r)?`${e.apiAddress}/${s}/${r}`:null,Bm);if(!r)return{tokenDecimals:Number(e.decimals),tokenLabel:"",tokenAvatar:""};let _=p?p==null?void 0:p.decimals:Number(e.decimals),l=p?p==null?void 0:p.name:"",f=p?(x=(T=p==null?void 0:p.assets)==null?void 0:T.svgUrl)!=null?x:(A=(v=p==null?void 0:p.media)==null?void 0:v[0])==null?void 0:A.thumbnailUrl:"";return{isLoading:d,tokenDecimals:_,tokenLabel:l,type:p==null?void 0:p.type,tokenAvatar:f,identifier:p==null?void 0:p.identifier,assets:p==null?void 0:p.assets,esdtPrice:p==null?void 0:p.price,ticker:p==null?void 0:p.ticker,name:p==null?void 0:p.name,error:m}}n();n();var Hm=require("react");n();n();var lx=require("react"),ux=require("@multiversx/sdk-web-wallet-provider"),fx=require("@multiversx/sdk-web-wallet-provider"),gx=h(require("qs"));k();R();F();lr();Y();var CO=$();n();var Ym=require("react"),Aa=require("@multiversx/sdk-core");n();var An=o=>Yo({apiEndpoint:o?`${se}/${o}?withGuardianInfo=true`:null});k();Vr();n();n();n();n();n();n();n();n();n();n();Po();n();var yx=h(require("axios"));n();var bx=h(require("axios"));n();Po();n();Po();n();n();n();n();var wx=require("@multiversx/sdk-opera-provider");n();var Ax=require("@multiversx/sdk-extension-provider");n();Xe();n();n();n();n();var Cx=h(jm());n();var Mx=require("@multiversx/sdk-native-auth-client");n();var Xm=h(require("axios"));n();n();n();function zm(o){return S(this,null,function*(){return yield new Promise(e=>{setTimeout(()=>e(),o)})})}n();var Km=(o,e,t,r=0)=>S(void 0,null,function*(){try{return yield o(...t)}catch(s){return r<e.retries?((e==null?void 0:e.delay)!=null&&(yield zm(e.delay)),yield Km(o,e,t,r+1)):null}}),va=(o,e={retries:5,delay:500})=>(...t)=>S(void 0,null,function*(){return yield Km(o,e,t)});var Ex=4;var $W=va((o,e,t)=>S(void 0,null,function*(){if(t){let p=Math.floor(Date.now()/1e3);return{hash:yield t(),timestamp:p}}let{data:r}=yield Xm.default.get(`${o}/${kt}?from=${Ex}&size=1&fields=hash,timestamp${e?"&shard="+e:""}`),[s]=r;return s}));n();n();Yn();n();n();Y();var e6={origin:$().origin,apiAddress:"https://api.multiversx.com",expirySeconds:60*60*24,tokenExpirationToastWarningSeconds:5*60};n();var Wx=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();var Fx=require("@multiversx/sdk-passkey-provider/out");k();Y();n();n();n();var $x=require("react"),qx=require("@multiversx/sdk-hw-provider");n();G();B();n();fn();Fo();Wo();Q();n();n();var B_=require("react"),U_=require("@multiversx/sdk-core"),Cb=require("@multiversx/sdk-extension-provider"),Eb=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),Pb=require("@multiversx/sdk-passkey-provider/out"),Rb=h(M_());k();n();n();n();n();n();n();n();n();n();n();var Dn=h(require("react"));var UB=(0,Dn.createContext)({}),GB=D.getState();n();var W_=h(require("react"));n();var Da=h(require("react")),fb=h(require("axios"));n();n();Xe();n();n();var yb=require("@multiversx/sdk-dapp-utils/out/helpers/providerNotInitializedError"),Sb=require("@multiversx/sdk-webview-provider/out/WebviewProvider");G();n();G();R();B();n();n();R();n();Q();n();R();B();n();n();var gb=require("@multiversx/sdk-core"),hb=h(require("bignumber.js"));k();n();var Tb=h(require("bignumber.js"));k();R();F();Q();Y();n();var F_=require("react"),Ab=require("@multiversx/sdk-extension-provider"),Ib=require("@multiversx/sdk-metamask-provider/out/metamaskProvider"),kb=require("@multiversx/sdk-passkey-provider/out");Xe();R();n();R();B();fn();Y();n();Ie();R();n();n();var Ob=require("react");n();n();F();Vo();n();var Vt=require("react"),G_=(o,e)=>{let[t,r]=(0,Vt.useState)(o);return(0,Vt.useEffect)(()=>{let p=setTimeout(()=>r(o),e);return()=>clearTimeout(p)},[o]),t};n();n();var Fb=require("react"),Bb=require("@multiversx/sdk-extension-provider");Ie();G();F();n();He();Q();Q();n();n();Xe();B();n();var Wb=require("react"),H_=require("@multiversx/sdk-core");R();n();var Ub=require("react"),Gb=require("@multiversx/sdk-opera-provider");Ie();G();F();He();Q();Y();n();var Hb=require("react");fr();Ie();Xe();G();R();F();He();Y();n();var zb=require("react");Ie();R();n();n();Mr();n();n();var Vb=h(require("platform"));fo();n();n();n();n();n();function V_(){return ca(D.getState())}n();n();Ro();F();n();n();var $b=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");n();n();fn();Fo();n();n();n();R();n();n();var qb=h(require("axios"));Q();n();n();var jb=h(Bt());Ro();var $_,q_,j_,D8=(j_=(q_=($_=De.safeWindow)==null?void 0:$_.location)==null?void 0:q_.origin)==null?void 0:j_.includes("localhost");n();Y();n();n();var n0=require("react");k();n();n();k();n();n();n();var Kb=h(require("bignumber.js"));n();n();n();var no=h(require("react")),Q_=require("react"),el=require("react"),Ra=h(require("classnames")),ol=require("react-dom");k();n();var K_=h(require("react")),X_=h(require("classnames"));var Yb=({className:o,children:e,styles:t})=>K_.default.createElement("div",{className:(0,X_.default)(t==null?void 0:t.dappModalBody,o)},e),Na=L(Yb,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),O(je)).default});n();var Ca=h(require("react")),Y_=h(require("classnames"));var Zb=({visible:o,customFooter:e,className:t,footerText:r,styles:s})=>o?Ca.default.createElement("div",{className:(0,Y_.default)(s==null?void 0:s.dappModalFooter,t)},e!=null?e:Ca.default.createElement("div",null,r)):null,Ea=L(Zb,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),O(je)).default});n();var nn=h(require("react")),Z_=require("@fortawesome/free-solid-svg-icons"),J_=require("@fortawesome/react-fontawesome"),Cn=h(require("classnames"));var Jb=({visible:o,headerText:e,customHeader:t,className:r,closeButtonClassName:s,headerTextClassName:p,onHide:m,globalStyles:d,styles:_})=>o?t?nn.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeader,r)},t):nn.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeader,r)},nn.default.createElement("div",{className:(0,Cn.default)(_==null?void 0:_.dappModalHeaderText,p)},e),nn.default.createElement("button",{onClick:m,className:(0,Cn.default)(_==null?void 0:_.dappModalCloseButton,d==null?void 0:d.btn,d==null?void 0:d.btnLight,s)},nn.default.createElement(J_.FontAwesomeIcon,{size:"lg",icon:Z_.faTimes}))):null,Pa=L(Jb,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),O(je)).default});var Qb={showHeader:!0,showFooter:!1,headerText:"",footerText:""},e0=({"data-testid":o="dappModal",children:e,className:t="dapp-modal-dialog-wrapper",closeOnEscape:r,config:s=Qb,id:p="dapp-modal",onHide:m,parentElement:d,visible:_,styles:l})=>{let[f,T]=(0,Q_.useState)(!1);if((0,el.useEffect)(()=>{T(!0)},[]),!_)return null;let{showHeader:v,showFooter:A,headerText:x,footerText:M,modalDialogClassName:P="dapp-modal-dialog",modalContentClassName:H="dapp-modal-dialog-content",modalHeaderClassName:Z="dapp-modal-dialog-header",modalHeaderTextClassName:J="dapp-modal-dialog-header-text",modalCloseButtonClassName:E="dapp-modal-dialog-close-button",modalBodyClassName:Re="dapp-modal-dialog-content-body",modalFooterClassName:ne="dapp-modal-dialog-footer",customModalHeader:ao,customModalFooter:io}=s,co=te=>{te.key==="Escape"&&r&&(m==null||m())};return no.default.createElement(no.default.Fragment,null,f&&(0,ol.createPortal)(no.default.createElement("div",{id:p,role:"dialog","aria-modal":"true",className:(0,Ra.default)(P,l==null?void 0:l.dappModal,t),"data-testid":o,onKeyDown:co},no.default.createElement("div",{className:(0,Ra.default)(l==null?void 0:l.dappModalContent,H)},no.default.createElement(Pa,{visible:v,headerText:x,customHeader:ao,className:Z,headerTextClassName:J,closeButtonClassName:E,onHide:m}),no.default.createElement(Na,{className:Re},e),no.default.createElement(Ea,{visible:A,customFooter:io,footerText:M,className:ne}))),d!=null?d:document==null?void 0:document.body))},o0=L(e0,{ssrStyles:()=>Promise.resolve().then(()=>(ze(),je)),clientStyles:()=>(ze(),O(je)).default});n();n();var nl=require("react");n();n();var tl=require("react"),r0=require("@multiversx/sdk-hw-provider");Ie();G();R();F();He();n();var t0=require("react");n();n();var Ma=require("react");G();R();F();He();Y();n();var i0=require("react"),c0=require("@multiversx/sdk-metamask-provider/out/metamaskProvider");Ie();G();F();He();Q();Q();n();var s0=require("react"),p0=require("@multiversx/sdk-passkey-provider/out");Ie();G();F();He();Q();Q();n();n();var rl=require("react");n();var _0=require("react");n();var Oa=require("react"),d0=require("socket.io-client");R();n();n();n();var l0=require("react");B();n();n();n();var cl=h(require("swr"));n();n();n();n();var al=h(require("axios"));function il(o=yn){let t=`${Xo()}/${o}`;return al.default.get(t)}n();function $t(){let o=r=>il(r).then(s=>s.data),{data:e,error:t}=(0,cl.default)(yn,o);return{price:e==null?void 0:e.price,error:t}}n();n();var qt=h(require("react")),Ba=h(require("classnames"));var f0=({className:o,styles:e})=>qt.default.createElement("div",{className:(0,Ba.default)(e==null?void 0:e.loadingDots,o)},Array.from({length:3}).map((t,r)=>qt.default.createElement("span",{key:`loading-dot-${r}`,className:(0,Ba.default)(e==null?void 0:e.loadingDot,e==null?void 0:e[`loadingDot-${r}`])})),qt.default.createElement("span",null,"Loading...")),wo=L(f0,{ssrStyles:()=>Promise.resolve().then(()=>(Fa(),Wa)),clientStyles:()=>(Fa(),O(Wa)).default});n();n();n();var Ao=h(require("react")),ml=h(require("bignumber.js"));k();var h0=({amount:o,styles:e,type:t,identifier:r})=>{let s=new ml.default(o),p=s.isZero(),m=s.isEqualTo(1)?"SFT":"SFTs",d=s.toNumber().toLocaleString("en"),_=`${d} ${r}`;return p?Ao.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are using"):t==="NonFungibleESDT"?Ao.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are sending an NFT"):t==="SemiFungibleESDT"?Ao.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},Ao.default.createElement("span",{className:e==null?void 0:e.confirmAmountLabelText},"You are sending"),Ao.default.createElement("span",{className:e==null?void 0:e.confirmAmountLabelValue,"data-testid":"confirmAmount","data-value":_},d," ",m)):Ao.default.createElement("div",{className:e==null?void 0:e.confirmAmountLabel},"You are sending")},dl=L(h0,{ssrStyles:()=>Promise.resolve().then(()=>(Ga(),Ua)),clientStyles:()=>(Ga(),O(Ua)).default});n();n();var Ee=h(require("react")),hl=require("@fortawesome/free-solid-svg-icons"),Tl=require("@fortawesome/react-fontawesome"),xl=h(require("classnames"));k();n();n();var Io=h(require("react")),$a=h(require("classnames"));n();var jt=h(require("react")),T0=o=>jt.createElement("svg",g({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),jt.createElement("g",null,jt.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),zt=T0;var y0=({amount:o,displayAsUsd:e,addEqualSign:t,egldIcon:r,className:s,showTokenLabel:p=!0,styles:m,tokenLabel:d,showTokenLabelSup:_,"data-testid":l})=>{let[f,T]=o.split("."),v=e&&f.indexOf("$")<0?`$${f}`:f,x=(()=>{let H={processedMainBalance:v};return t&&e&&(H.approximation="\u2248"),T&&(H.decimalBalance=`.${T}`),!e&&p&&(H.tokenLabel=` ${d}`),H})(),P=[x.approximation,x.processedMainBalance,x.decimalBalance,x.tokenLabel].reduce((H,Z)=>Z?H.concat(Z):H,"");return Io.default.createElement("div",{className:(0,$a.default)(m==null?void 0:m.balance,s),"data-testid":l,"data-value":P},r&&!e&&Io.default.createElement(zt,{className:m==null?void 0:m.balanceSymbol}),x.approximation&&Io.default.createElement("span",{className:m==null?void 0:m.balanceApproximation},x.approximation),x.processedMainBalance&&Io.default.createElement("span",{className:m==null?void 0:m.balanceMain},v),x.decimalBalance&&Io.default.createElement("span",{className:m==null?void 0:m.balanceDecimals},x.decimalBalance),x.tokenLabel&&Io.default.createElement("sup",{className:(0,$a.default)(m==null?void 0:m.balanceSuffix,{[m==null?void 0:m.balanceSuffixSup]:_})},x.tokenLabel))},En=L(y0,{ssrStyles:()=>Promise.resolve().then(()=>(Va(),Ha)),clientStyles:()=>(Va(),O(Ha)).default});n();n();var ll=h(require("react")),ul=h(require("classnames"));k();var S0=d=>{var _=d,{amount:o,usd:e,decimals:t,addEqualSign:r,className:s,globalStyles:p}=_,m=fe(_,["amount","usd","decimals","addEqualSign","className","globalStyles"]);let l=Nt({amount:o,usd:e,decimals:t,addEqualSign:r!=null?r:!0}),T=`${o}`===le?`= $${le}`:l;return ll.default.createElement("small",g({className:(0,ul.default)(p==null?void 0:p.formText,p==null?void 0:p.textSecondary,p==null?void 0:p.mt0,s!=null?s:"dapp-usd-value")},m),T)},fl=L(S0,{});var v0=({isEgld:o,styles:e,tokenPrice:t,isNftOrSft:r,handleReference:s,currentTransaction:p,amount:m,tokenDetails:d})=>{let{network:_}=qe(),{tokenAvatar:l,tokenDecimals:f,identifier:T}=d,v=({addCommas:P})=>Te({input:o?p.transaction.getValue().toString():m,decimals:o?Number(_.decimals):f,digits:Number(_.digits),showLastNonZeroDecimal:!1,addCommas:P}),A=o||d.identifier===_c,x=v({addCommas:!0}),M=v({addCommas:!1});return Ee.default.createElement("div",{className:e==null?void 0:e.confirmAmountData},Ee.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataWrapper},!A&&l&&Ee.default.createElement("img",{src:l,className:e==null?void 0:e.confirmAmountDataIcon}),!A&&!l&&Ee.default.createElement("div",{className:(0,xl.default)(e==null?void 0:e.confirmAmountDataIcon,e==null?void 0:e.confirmAmountDataIconDefault)},Ee.default.createElement(Tl.FontAwesomeIcon,{icon:hl.faCoins,className:e==null?void 0:e.confirmAmountDataIconDefaultIcon})),Ee.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataBalanceWrapper,ref:s},Ee.default.createElement(En,{amount:x,egldIcon:A,"data-testid":"confirmAmount",showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:A?_.egldLabel:T,className:e==null?void 0:e.confirmAmountDataBalance}))),!r&&t&&Ee.default.createElement(fl,{amount:M,usd:t,"data-testid":"confirmUsdValue",className:e==null?void 0:e.confirmAmountDataPrice}),!r&&!t&&Ee.default.createElement("div",{className:e==null?void 0:e.confirmAmountDataPrice},"Price Unknown"))},yl=L(v0,{ssrStyles:()=>Promise.resolve().then(()=>(ja(),qa)),clientStyles:()=>(ja(),O(qa)).default});n();n();var Se=h(require("react")),bl=require("@fortawesome/free-solid-svg-icons"),vl=require("@fortawesome/react-fontawesome"),wl=h(require("classnames"));k();Ro();var A0=({styles:o,amount:e,type:t,tokenDetails:r})=>{let{network:s}=qe(),{identifier:p,tokenAvatar:m,name:d}=r,_="SemiFungibleESDT"===t,f=Array(Math.min(4,Number(e))).fill(null);return Se.default.createElement("div",{onClick:v=>{var x;if(!p)return;let A=vn({explorerAddress:s.explorerAddress,to:bn.nftDetails(p)});v.preventDefault(),v.stopPropagation(),(x=De.safeWindow)!=null&&x.open&&De.safeWindow.open(A)},className:o==null?void 0:o.confirmAmountNftSft},Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftWrapper},m?Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconWrapper},f.map((v,A)=>Se.default.createElement("img",{src:m,alt:t,key:`nft-sft-avatar-${A}`,style:{opacity:1-.25*A,zIndex:f.length-A,marginLeft:(f.length-A-1)*4},className:(0,wl.default)(o==null?void 0:o.confirmAmountNftSftIcon,{[o==null?void 0:o.confirmAmountNftSftIconRelative]:A===0})}))):Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconWrapper},Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftIconText},_?"SFT":"NFT")),Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftContent},Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftName,"data-testid":"nftLabel"},d),Se.default.createElement("div",{className:o==null?void 0:o.confirmAmountNftSftTicker,"data-testid":"nftIdentifier"},p))),Se.default.createElement(vl.FontAwesomeIcon,{icon:bl.faArrowUpRightFromSquare,className:o==null?void 0:o.confirmAmountNftSftIcon}))},Al=L(A0,{ssrStyles:()=>Promise.resolve().then(()=>(Ka(),za)),clientStyles:()=>(Ka(),O(za)).default});n();n();var Il=require("react"),kl=()=>{let[o,e]=(0,Il.useState)(!0),t=p=>p.getBoundingClientRect().width,r=p=>parseInt(getComputedStyle(p).getPropertyValue("font-size"));return{isFontSizeLoading:o,handleAmountReference:p=>{if(!p)return;let m=p.firstChild,d={parent:p.offsetWidth,firstChild:r(m)};if(!!m){for(;d.parent<t(m);){let _=d.firstChild-.1,l={fontSize:`${_}px`},f={firstChild:_};Object.assign(m.style,l),Object.assign(d,f)}e(!1)}}}};var k0=({styles:o,currentTransaction:e})=>{let{tokenId:t,nonce:r,amount:s}=e.transactionTokenInfo,{isFontSizeLoading:p,handleAmountReference:m}=kl(),d=r&&r.length>0?`${t}-${r}`:t,_=Gm({tokenId:d}),{price:l}=$t(),{type:f,esdtPrice:T,isLoading:v,identifier:A}=_,x=!t,M=x?l:T,P=f?["SemiFungibleESDT","NonFungibleESDT"].includes(f):!1;return Pe.default.createElement("div",{className:o==null?void 0:o.confirmAmount},Pe.default.createElement("div",{className:o==null?void 0:o.confirmAmountLabel},v?Pe.default.createElement(wo,null):Pe.default.createElement(dl,{amount:s,type:f,identifier:A})),Pe.default.createElement("div",{className:o==null?void 0:o.confirmAmountWrapper},Pe.default.createElement(wo,{className:(0,Za.default)(o==null?void 0:o.confirmAmountLoading,{[o==null?void 0:o.confirmAmountLoadingVisible]:v||p})}),Pe.default.createElement("div",{className:(0,Za.default)(o==null?void 0:o.confirmAmountContent,{[o==null?void 0:o.confirmAmountContentHidden]:v||p})},P?Pe.default.createElement(Al,{amount:s,type:f,tokenDetails:_}):Pe.default.createElement(yl,{isNftOrSft:P,isEgld:x,amount:s,handleReference:m,currentTransaction:e,tokenDetails:_,tokenPrice:M}))))},Dl=L(k0,{ssrStyles:()=>Promise.resolve().then(()=>(Ya(),Xa)),clientStyles:()=>(Ya(),O(Xa)).default});n();n();var Ke=h(require("react"));k();var D0=({transaction:o,styles:e})=>{let{price:t}=$t(),r=V_(),s=fa({gasPerDataByte:String(Hn),gasPriceModifier:String(gr),gasLimit:o.getGasLimit().valueOf().toString(),gasPrice:o.getGasPrice().valueOf().toString(),data:o.getData().toString(),chainId:o.getChainID().valueOf()}),p=Te({input:s,showLastNonZeroDecimal:!0}),m=t?ym({feeLimit:s,egldPriceInUsd:t,hideEqualSign:!0}):null;return Ke.default.createElement("div",{className:e==null?void 0:e.confirmFee},Ke.default.createElement("div",{className:e==null?void 0:e.confirmFeeLabel},"Transaction Fee"),Ke.default.createElement("div",{className:e==null?void 0:e.confirmFeeData},Ke.default.createElement(En,{className:e==null?void 0:e.confirmFeeDataBalance,"data-testid":"confirmFee",egldIcon:!0,showTokenLabel:!0,showTokenLabelSup:!0,tokenLabel:r,amount:p}),m?Ke.default.createElement("span",{className:e==null?void 0:e.confirmFeeDataPriceWrapper},"(",Ke.default.createElement(En,{amount:m,displayAsUsd:!0,addEqualSign:!0,className:e==null?void 0:e.confirmFeeDataPrice}),")"):Ke.default.createElement("span",{className:e==null?void 0:e.confirmFeeDataPriceWrapper},Ke.default.createElement(wo,null))))},Cl=L(D0,{ssrStyles:()=>Promise.resolve().then(()=>(Qa(),Ja)),clientStyles:()=>(Qa(),O(Ja)).default});n();n();var K=h(require("react")),Hl=require("@fortawesome/free-solid-svg-icons"),Vl=require("@fortawesome/react-fontawesome"),$l=h(require("bignumber.js"));k();n();n();var El=o=>o?o.lastIndexOf(".elrond")>0?o.substring(0,o.lastIndexOf(".")):o:void 0;n();n();var ni=h(require("react")),Rl=require("@fortawesome/free-solid-svg-icons"),Ml=require("@fortawesome/react-fontawesome"),Ol=h(require("classnames"));var C0=_=>{var l=_,{page:o,text:e,className:t="dapp-explorer-link",children:r,globalStyles:s,customExplorerIcon:p,styles:m}=l,d=fe(l,["page","text","className","children","globalStyles","customExplorerIcon","styles"]);let{network:{explorerAddress:f}}=qe(),T=e!=null?e:ni.default.createElement(Ml.FontAwesomeIcon,{icon:p!=null?p:Rl.faArrowUpRightFromSquare,className:m==null?void 0:m.search}),v=vn({explorerAddress:String(f),to:o});return ni.default.createElement("a",g({href:v,target:"_blank",className:(0,Ol.default)(m==null?void 0:m.link,s==null?void 0:s.ml2,t),rel:"noreferrer"},d),r!=null?r:T)},Wl=L(C0,{ssrStyles:()=>Promise.resolve().then(()=>(oi(),ei)),clientStyles:()=>(oi(),O(ei)).default});n();n();var q=h(require("react")),Bl=h(require("classnames"));k();var P0=({text:o,className:e="dapp-trim","data-testid":t="trim-text-component",color:r,styles:s})=>{let[p,m]=(0,q.useState)(0),[d,_]=(0,q.useState)(!1),l=(0,q.useRef)(document==null?void 0:document.createElement("span")),f=(0,q.useRef)(document==null?void 0:document.createElement("span")),T=G_(p,300),v=()=>{if(l.current&&f.current){let M=f.current.offsetWidth-l.current.offsetWidth;_(M>1)}},A=()=>{m(p+1)};return(0,q.useEffect)(()=>(window==null||window.addEventListener("resize",A),()=>{window==null||window.removeEventListener("resize",A)})),(0,q.useEffect)(()=>{v()},[T]),q.default.createElement("span",{ref:l,className:(0,Bl.default)(s==null?void 0:s.trim,r,e,{overflow:d}),"data-testid":t},q.default.createElement("span",{ref:f,className:s==null?void 0:s.hiddenTextRef},o),d?q.default.createElement(q.default.Fragment,null,q.default.createElement("span",{className:s==null?void 0:s.left},q.default.createElement("span",null,String(o).substring(0,Math.floor(o.length/2)))),q.default.createElement("span",{className:s==null?void 0:s.ellipsis},dc),q.default.createElement("span",{className:s==null?void 0:s.right},q.default.createElement("span",null,String(o).substring(Math.ceil(o.length/2))))):q.default.createElement("span",null,o))},Ul=L(P0,{ssrStyles:()=>Promise.resolve().then(()=>(ri(),ti)),clientStyles:()=>(ri(),O(ti)).default});var M0=({amount:o,label:e,receiver:t,customExplorerIcon:r,receiverUsername:s,customCopyIcon:p,scamReport:m,styles:d})=>{let _=pa(t),l=Boolean(_||s),f=new $l.default(o).isZero(),{data:T,isLoading:v,error:A}=An(l?null:t),x=s!=null?s:T==null?void 0:T.username,M=x!=null?x:t,P=Boolean(t&&Boolean(x)&&!A),H=f?"To interact with":"To";return K.default.createElement("div",{className:d==null?void 0:d.receiver},K.default.createElement("div",{className:d==null?void 0:d.receiverLabelWrapper},K.default.createElement("div",{className:d==null?void 0:d.receiverLabel},e!=null?e:H),m&&K.default.createElement("div",{className:d==null?void 0:d.receiverLabelScam},K.default.createElement("span",{className:d==null?void 0:d.receiverLabelScamText,"data-testid":"confirmScamReport"},m),K.default.createElement(Vl.FontAwesomeIcon,{icon:Hl.faExclamationTriangle,className:d==null?void 0:d.receiverLabelScamIcon}))),v?K.default.createElement("div",{className:d==null?void 0:d.receiverWrapper},K.default.createElement(wo,{className:d==null?void 0:d.receiverLoading})):K.default.createElement("div",{className:d==null?void 0:d.receiverWrapper,"data-testid":"confirmReceiver"},K.default.createElement(Ul,{text:t,className:d==null?void 0:d.receiverTrim}),P&&!_&&K.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",K.default.createElement(zt,{className:d==null?void 0:d.receiverDataIcon}),K.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},El(M)),")"),_&&K.default.createElement("span",{className:d==null?void 0:d.receiverData},"(",K.default.createElement("span",{className:d==null?void 0:d.receiverDataUsername},"Smart Contract"),")"),K.default.createElement(dn,{text:t,className:d==null?void 0:d.receiverCopy,copyIcon:p}),K.default.createElement(Wl,{page:`/${se}/${t}`,className:d==null?void 0:d.receiverExternal,customExplorerIcon:r})))},ql=L(M0,{ssrStyles:()=>Promise.resolve().then(()=>(ii(),ai)),clientStyles:()=>(ii(),O(ai)).default});var W0=({currentTransaction:o,error:e,signStepInnerClasses:t,globalStyles:r,styles:s})=>{if(!o)return null;let{inputGroupClassName:p,inputLabelClassName:m,inputValueClassName:d,errorClassName:_}=t||{},{tokenId:l,multiTxData:f,receiver:T,amount:v}=o.transactionTokenInfo,A=f?new zl.Address(T).bech32():o.transaction.getReceiver().toString(),x=o.receiverScamInfo,M=Ls(x,r),P=o.transaction.getData().toString();return to.default.createElement("div",{className:s==null?void 0:s.summary},to.default.createElement("div",{className:s==null?void 0:s.fields},to.default.createElement(Dl,{currentTransaction:o}),to.default.createElement(ql,{scamReport:x,receiver:A,amount:v}),to.default.createElement(Cl,{transaction:o.transaction}),P&&to.default.createElement(Is,{className:p,data:P,highlight:f,innerTransactionDataClasses:{transactionDataInputLabelClassName:m,transactionDataInputValueClassName:d},isScCall:!l,showDataDecode:!0,transactionIndex:o.transactionIndex}),e&&to.default.createElement("p",{className:(0,Kl.default)(M.errorMessage,_)},e)))},Xl=L(W0,{ssrStyles:()=>Promise.resolve().then(()=>(si(),ci)),clientStyles:()=>(si(),O(ci)).default});n();n();var ro=h(require("react")),Zl=require("@fortawesome/free-solid-svg-icons"),Jl=require("@fortawesome/react-fontawesome"),Pn=h(require("classnames"));var B0=o=>{let{steps:e,size:t="large",type:r="simple",collapsible:s=!1,styles:p}=o,m=e.filter(f=>!f.hidden),d=m.findIndex(f=>f.active),_=t==="large"?650:450,l=33/100*_;return ro.default.createElement("div",{className:p==null?void 0:p.progressSteps},m.map((f,T)=>ro.default.createElement("div",{key:`progress-step-${T}`,style:{width:s?"auto":`${100/m.length}%`},className:(0,Pn.default)(p==null?void 0:p.progressStep,{[p==null?void 0:p.left]:r==="detailed"})},ro.default.createElement("div",{style:{width:s?f.active?l:20:"auto"},className:(0,Pn.default)(p==null?void 0:p.progressStepWrapper,{[p==null?void 0:p.active]:f.active,[p==null?void 0:p.detailed]:r==="detailed",[p==null?void 0:p.completed]:T<d||f.completed,[p==null?void 0:p.collapsible]:s})},ro.default.createElement("div",{className:(0,Pn.default)(p==null?void 0:p.progressStepIndex,{[p==null?void 0:p.active]:f.active})},T+1,r==="detailed"&&T<d&&ro.default.createElement(Jl.FontAwesomeIcon,{icon:Zl.faCheck,className:p==null?void 0:p.progressStepCheck})),f.title&&r==="detailed"&&ro.default.createElement("div",{className:(0,Pn.default)(p==null?void 0:p.progressStepTitle,{[p==null?void 0:p.active]:f.active,[p==null?void 0:p.collapsible]:s})},ro.default.createElement("div",{className:p==null?void 0:p.progressStepTitleText},f.title))))))},Ql=L(B0,{ssrStyles:()=>Promise.resolve().then(()=>(mi(),pi)),clientStyles:()=>(mi(),O(pi)).default});n();B();var G0=o=>{var hi;let{allTransactions:e,className:t,currentStep:r,currentTransaction:s,GuardianScreen:p,error:m,globalStyles:d,handleClose:_,handleSubmit:l,isLastTransaction:f,onPrev:T,onSignTransaction:v,signStepInnerClasses:A,styles:x,title:M,waitingForDevice:P}=o,[H,Z]=(0,j.useState)(!1),[J,E]=(0,j.useState)({});if(!s)return null;let ne=`${s.transaction.getNonce().valueOf().toString()}_${s.transactionTokenInfo.multiTxData}_${s.transactionIndex}`;(0,j.useEffect)(()=>{let Zt=Object.keys(J).includes(ne),pu=Object.values(J).includes(r);Zt||pu||E(mu=>I(g({},mu),{[ne]:r}))},[ne,r]);let ao=s.transaction.getData().toString(),{buttonsWrapperClassName:io,buttonClassName:co}=A||{},{type:te,multiTxData:Rn}=s.transactionTokenInfo,ou=r===0,ui=Zt=>{Zt.preventDefault(),ou?_():T()},Xt=f&&!P,nu=()=>S(void 0,null,function*(){if(yield v(),Xt&&p)return Z(!0);Xt&&l&&l()}),tu=te&&Rn&&!ao.endsWith(Rn),so="Sign & Continue";so=P?"Check your Ledger":so,so=Xt?"Sign & Submit":so,so=tu?"Continue":so;let Mn={currentTransaction:s,error:m,allTransactions:e,currentStep:r,isGuarded:Boolean(p),signStepInnerClasses:A},fi=()=>{Z(!1)},ru=e.length>1?"Sign Transactions":"Sign Transaction",au=e.length>1?"Confirm Transactions":"Confirm Transaction",iu=e.length>1?`Signing Transaction ${r+1} of ${e.length}`:M||"Sign Transaction",Yt=p&&H,cu=Yt?"Verify Guardian":iu,su=[{title:ru,active:!H},{title:au,active:H,hidden:!Mn.isGuarded}],gi=J[ne]===r;return j.default.createElement("div",{className:(0,ko.default)(x==null?void 0:x.modalLayoutContent,x==null?void 0:x.spaced,t,{[(hi=x==null?void 0:x.guarded)!=null?hi:""]:Mn.isGuarded})},Yt&&j.default.createElement("div",{onClick:fi,className:(0,ko.default)(x==null?void 0:x.modalLayoutHeadingIcon,x==null?void 0:x.back)},j.default.createElement(li.FontAwesomeIcon,{icon:Kt.faArrowLeft})),j.default.createElement("div",{onClick:ui,className:(0,ko.default)(x==null?void 0:x.modalLayoutHeadingIcon,x==null?void 0:x.close)},j.default.createElement(li.FontAwesomeIcon,{icon:Kt.faTimes})),Mn.isGuarded&&j.default.createElement(Ql,{steps:su,type:"detailed",size:"small"}),j.default.createElement("div",{className:x==null?void 0:x.title,"data-testid":"signStepTitle"},cu||"Confirm on Ledger"),Yt?j.default.createElement(p,I(g({},o),{onPrev:fi,guardianFormDescription:"Enter the code from your Authenticator app to verify this transaction."})):j.default.createElement(j.default.Fragment,null,j.default.createElement(Xl,g({},Mn)),j.default.createElement("div",{className:(0,ko.default)(x==null?void 0:x.signButtons,io)},j.default.createElement("button",{id:"closeButton","data-testid":"closeButton",onClick:ui,className:(0,ko.default)(x==null?void 0:x.signButtonCancel,co)},r===0?"Cancel":"Back"),j.default.createElement("button",{type:"button",className:(0,ko.default)(d==null?void 0:d.btnPrimary,x==null?void 0:x.signButtonSubmit,co),id:"signBtn","data-testid":"signBtn",onClick:nu,disabled:P||!gi},gi?so:"Loading..."))))},H0=L(G0,{ssrStyles:()=>Promise.resolve().then(()=>(_i(),di)),clientStyles:()=>(_i(),O(di)).default});0&&(module.exports={SignStep});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=SignStep.js.map
