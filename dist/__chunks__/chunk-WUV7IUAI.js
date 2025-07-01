import{a as f}from"./chunk-4Q5XARIX.js";import{a as p}from"./chunk-3ZIF524L.js";import{a as c}from"./chunk-OAAAXKHG.js";import{a as i}from"./chunk-4GKSQE2H.js";import{j as u}from"./chunk-OKLK5GYW.js";import{e as m,k as n,m as t}from"./chunk-HBP5N4FR.js";var B,P=m(()=>{t();u();f();B=({input:s,decodeMethod:a,identifier:d})=>{let e={displayValue:"",validationWarnings:[]};if(!s.includes("@")&&!s.includes(`
`))return e.displayValue=i(s,a),e;if(s.includes("@")){let r=s.split("@"),o=p({parts:r,identifier:d,decodeMethod:a,display:e});e.displayValue=o.join("@")}if(s.includes(`
`)){let r=s.split(`
`),o=r.map(l=>{let D=n.Buffer.from(l,"base64");return a==="raw"?l:i(D.toString("hex"),a)}),y=a==="smart"?c({parts:r,decodedParts:o,identifier:d}):o;e.displayValue=y.join(`
`)}return e}});export{B as a,P as b};
//# sourceMappingURL=chunk-WUV7IUAI.js.map
