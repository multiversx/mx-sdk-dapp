import{j as t,m as o}from"./chunk-HBP5N4FR.js";o();import n from"axios";function g(e){return t(this,null,function*(){try{let{data:r}=yield n.get(`${e}/websocket/config`);return`wss://${r.url}`}catch(r){throw console.error(r),new Error("Can not get websocket url")}})}export{g as a};
//# sourceMappingURL=chunk-YAR2KJ42.js.map
