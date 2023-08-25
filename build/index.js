(()=>{"use strict";var e,t={230:()=>{const e=window.wp.blocks,t=window.wp.i18n,a=window.wp.element,n=window.wp.blockEditor,l=window.wp.components,r=({toggleOnClick:e=(()=>{}),disabled:t})=>{const[n,l]=(0,a.useState)(!0);return(0,a.createElement)("label",{className:"kwd-toggle"},(0,a.createElement)("input",{className:"kwd-toggle-input",type:"checkbox",checked:t,onChange:()=>e()}),(0,a.createElement)("span",{className:"kwd-toggle-button"}))},m=JSON.parse('{"u2":"konomotoblock/konomoto-product-block"}');(0,e.registerBlockType)(m.u2,{edit:function({attributes:e,setAttributes:m}){const i=(0,n.useBlockProps)(),c={description:e.description,priceEnabled:e.priceEnabled,price:e.price,materialsEnabled:e.materialsEnabled,materials:e.materials,measurementsEnabled:e.measurementsEnabled,measurements:e.measurements},[s,d]=(0,a.useState)(c);return(0,a.useEffect)((()=>{m({description:s.description,priceEnabled:s.priceEnabled,price:s.price,materialsEnabled:s.materialsEnabled,materials:s.materials,measurementsEnabled:s.measurementsEnabled,measurements:s.measurements})}),[s]),(0,a.createElement)("div",{...i},(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("h2",null,"Description:"),(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",multiline:"true",withoutInteractiveFormatting:"true",name:"description",id:"description",value:s.description,placeholder:(0,t.__)("Enter a description..."),onChange:e=>(e=>{e&&d({...s,description:e})})(e)})),(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("div",null,(0,a.createElement)("div",{class:"kwd-flex-row"},(0,a.createElement)("h2",null,"Price: "),(0,a.createElement)(r,{toggleOnClick:()=>{!0===s.priceEnabled?d({...s,priceEnabled:!1,price:""}):d({...s,priceEnabled:!0})},disabled:s.priceEnabled})),!0===s.priceEnabled?(0,a.createElement)("div",{className:"kwd-flex-row"},(0,a.createElement)("p",{className:"kwd-edit-input-label"},"$"),(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",withoutInteractiveFormatting:"true",name:"price",id:"price",value:s.price,placeholder:"9999",onChange:e=>(e=>{e&&d({...s,price:e})})(e)})):(0,a.createElement)("p",null,"Available for ",(0,a.createElement)("a",{href:"/contact"},"special order")))),(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)("div",{class:"kwd-edit-product-specs-container"},(0,a.createElement)("div",{className:"kwd-flex-column"},(0,a.createElement)("div",{className:"kwd-flex-row"},(0,a.createElement)("h2",null,"Materials"),(0,a.createElement)(r,{toggleOnClick:()=>{!0===s.materialsEnabled?d({...s,materialsEnabled:!1,materials:[{piece:"",madeFrom:""}]}):d({...s,materialsEnabled:!0})},disabled:s.materialsEnabled})),!0===s.materialsEnabled?(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"kwd-edit-materials-grid"},(0,a.createElement)("h3",null,"Piece"),(0,a.createElement)("h3",null,"Material")),s.materials.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-edit-materials-grid"},(0,a.createElement)(n.RichText,{className:"kwd-edit-input kwd-edit-mats-piece",tagName:"p",format:"string",withoutInteractiveFormatting:"true",id:`piece-${t}`,name:`piece-${t}`,value:e.piece,placeholder:"Piece name",onChange:e=>((e,t)=>{const a=[...s.materials];e&&(a[t].piece=e,d({...s,materials:a}))})(e,t)}),(0,a.createElement)(n.RichText,{className:"kwd-edit-input kwd-edit-mats-made-from",tagName:"p",withoutInteractiveFormatting:"true",id:`madeFrom-${t}`,name:`madeFrom-${t}`,value:e.madeFrom,placeholder:"Made from...",onChange:e=>((e,t)=>{const a=[...s.materials];e&&(a[t].madeFrom=e,d({...s,materials:a}))})(e,t)}),(0,a.createElement)("button",{onClick:e=>((e,t)=>{let a=[...s.materials];a.splice(t,1),d({...s,materials:a})})(0,t),className:"kwd-edit-remove-button"},(0,a.createElement)(l.Dashicon,{icon:"remove"}))))),(0,a.createElement)("button",{onClick:()=>{const e=[...s.materials];e.push({piece:"",madeFrom:""}),d({...s,materials:e})},className:"kwd-edit-add-part-button"},"+ Add Part")):(0,a.createElement)("p",null,"Materials disabled.")),(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("div",{className:"kwd-flex-row"},(0,a.createElement)("h2",null,"Measurements"),(0,a.createElement)(r,{toggleOnClick:()=>{!0===s.measurementsEnabled?d({...s,measurementsEnabled:!1,measurements:[{name:"Length:",value:"",unit:"cm"},{name:"Width:",value:"",unit:"cm"},{name:"Height:",value:"",unit:"cm"},{name:"Depth:",value:"",unit:"cm"}]}):d({...s,measurementsEnabled:!0})},disabled:s.measurementsEnabled})),!0===s.measurementsEnabled?(0,a.createElement)("div",null,s.measurements.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-edit-measurement-grid"},(0,a.createElement)("p",{htmlFor:e.name,className:"kwd-edit-input-label kwd-edit-measurement-name"},e.name),(0,a.createElement)("div",{className:"kwd-edit-measurement-subgrid"},(0,a.createElement)(n.RichText,{className:"kwd-edit-input kwd-edit-measurement-value",tagName:"p",withoutInteractiveFormatting:"true",id:`measurement-${t}`,name:e.name,value:e.value,placeholder:"0",onChange:e=>((e,t)=>{const a=[...s.measurements];e&&(a[t].value=e,d({...s,measurements:a}))})(e,t)}),(0,a.createElement)("select",{name:`${e.name}-unit`,id:`${e.name}-unit`,onChange:e=>((e,t)=>{const a=[...s.measurements];if(e){const{value:n}=e.target;a[t].unit=n,d({...s,measurements:a})}})(e,t),className:"kwd-edit-select",value:e.unit},(0,a.createElement)("option",{value:"cm"},"cm"),(0,a.createElement)("option",{value:"in"},"in"),(0,a.createElement)("option",{value:"m"},"m"),(0,a.createElement)("option",{value:"ft"},"ft"))))))):(0,a.createElement)("p",null,"Measurements disabled.")))))},save:function({attributes:e}){const t=n.useBlockProps.save();return(0,a.createElement)("div",{...t},(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.description})),e.price.length>1?(0,a.createElement)("div",{style:{display:"flex"}},(0,a.createElement)("p",{className:"kwd-price"},"$"),(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.price,className:"kwd-price"})):(0,a.createElement)("p",null,"Available for ",(0,a.createElement)("a",{href:"/contact"},"special order")),!0===e.materialsEnabled||!0===e.measurementsEnabled?(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)("h2",null,"Specifications"),(0,a.createElement)("div",{className:"kwd-product-specs-container"},!0===e.materialsEnabled?(0,a.createElement)("div",{style:{display:"flex",flexDirection:"column"}},(0,a.createElement)("h3",null,"Materials"),e.materials?e.materials.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-materials-grid"},(0,a.createElement)(n.RichText.Content,{tagName:"p",format:"string",value:`${e.piece}:`,className:"kwd-mats-piece"}),(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.madeFrom,className:"kwd-mats-made-from"})))):""):null,!0===e.measurementsEnabled?(0,a.createElement)("div",{style:{display:"flex",flexDirection:"column"}},(0,a.createElement)("h3",null,"Measurements"),e.measurements.map(((e,t)=>""!==e.value?(0,a.createElement)("div",{key:t,style:{display:"flex",gap:"1rem"}},(0,a.createElement)("p",{className:"kwd-measurement-name"},e.name),(0,a.createElement)("div",{className:"kwd-measurements-grid"},(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.value,className:"kwd-measurement-value"}),(0,a.createElement)("p",{className:"kwd-measurement-unit"},e.unit))):void 0))):null)):null)}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var m=1/0;for(d=0;d<e.length;d++){a=e[d][0],l=e[d][1],r=e[d][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||m>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,r<m&&(m=r));if(i){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,m=a[0],i=a[1],c=a[2],s=0;if(m.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(c)var d=c(n)}for(t&&t(a);s<m.length;s++)r=m[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self.webpackChunkkonomoto_product_block=self.webpackChunkkonomoto_product_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(230)));l=n.O(l)})();