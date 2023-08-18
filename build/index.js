(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.i18n,a=window.wp.element,n=window.wp.blockEditor,r=window.wp.components,i=JSON.parse('{"u2":"konomotoblock/konomoto-product-block"}');(0,e.registerBlockType)(i.u2,{edit:function({attributes:e,setAttributes:i}){const l=(0,n.useBlockProps)(),c={description:e.description?e.description:"",price:e.price?e.price:"",materials:e.materials?e.materials:[{piece:"",madeFrom:""}],measurements:e.measurements?e.measurements:[{name:"Length:",value:"",unit:"cm"},{name:"Width:",value:"",unit:"cm"},{name:"Height:",value:"",unit:"cm"},{name:"Depth:",value:"",unit:"cm"}]},[m,s]=(0,a.useState)(c);return(0,a.useEffect)((()=>{i({description:m.description,price:m.price,materials:m.materials,measurements:m.measurements}),console.log("useEffect",e)}),[m]),(0,a.createElement)("div",{...l},(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("h2",null,"Description:"),(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",multiline:"true",withoutInteractiveFormatting:"true",name:"description",id:"description",value:m.description,placeholder:(0,t.__)("Enter a description..."),onChange:e=>(e=>{e&&s({...m,description:e})})(e)})),(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("h2",null,"Price: "),(0,a.createElement)("div",{className:"kwd-flex-row"},(0,a.createElement)("p",{className:"kwd-edit-price-label"},"$"),(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",withoutInteractiveFormatting:"true",name:"price",id:"price",value:m.price,placeholder:"9999",onChange:e=>(e=>{e&&s({...m,price:e})})(e)}))),(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)("h2",null,"Specifications"),(0,a.createElement)("div",{class:"kwd-edit-product-specs-container"},(0,a.createElement)("div",{className:"kwd-flex-column"},(0,a.createElement)("h2",null,"Materials"),(0,a.createElement)("div",{className:"kwd-edit-materials-grid"},(0,a.createElement)("h3",null,"Piece"),(0,a.createElement)("h3",null,"Material")),m.materials.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-edit-materials-grid"},(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",format:"string",withoutInteractiveFormatting:"true",id:`piece-${t}`,name:`piece-${t}`,value:e.piece,placeholder:"Piece name",onChange:e=>((e,t)=>{const a=[...m.materials];console.log("Mutation:",a===m.materials),e&&(a[t].piece=e,s({...m,materials:a}))})(e,t)}),(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",withoutInteractiveFormatting:"true",id:`madeFrom-${t}`,name:`madeFrom-${t}`,value:e.madeFrom,placeholder:"Made from...",onChange:e=>((e,t)=>{const a=[...m.materials];console.log("Mutation:",a===m.materials),e&&(a[t].madeFrom=e,s({...m,materials:a}))})(e,t)}),(0,a.createElement)("button",{onClick:e=>((e,t)=>{let a=[...m.materials];a.splice(t,1),s({...m,materials:a})})(0,t),className:"kwd-edit-remove-button"},(0,a.createElement)(r.Dashicon,{icon:"remove"}))))),(0,a.createElement)("button",{onClick:()=>{const e=[...m.materials];console.log("Mutation1:",e===m.materials),e.push({piece:"",madeFrom:""}),s({...m,materials:e})},className:"kwd-edit-add-part-button"},"+ Add Part")),(0,a.createElement)("div",{className:"kwd-product-info-container"},(0,a.createElement)("h2",null,"Measurements"),m.measurements.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-edit-measurement-grid"},(0,a.createElement)("p",{htmlFor:e.name},e.name),(0,a.createElement)("div",{className:"kwd-edit-measurement-subgrid"},(0,a.createElement)(n.RichText,{className:"kwd-edit-input",tagName:"p",withoutInteractiveFormatting:"true",id:`measurement-${t}`,name:e.name,value:e.value,placeholder:"0",onChange:e=>((e,t)=>{const a=[...m.measurements];console.log("Mutation:",a===m.measurements),e&&(a[t].value=e,s({...m,measurements:a}))})(e,t)}),(0,a.createElement)("select",{name:`${e.name}-unit`,id:`${e.name}-unit`,onChange:e=>((e,t)=>{const a=[...m.measurements];if(e){const{value:n}=e.target;a[t].unit=n,s({...m,measurements:a})}})(e,t),className:"kwd-edit-input",value:e.unit},(0,a.createElement)("option",{value:"cm"},"cm"),(0,a.createElement)("option",{value:"in"},"in"),(0,a.createElement)("option",{value:"m"},"m"),(0,a.createElement)("option",{value:"ft"},"ft"))))))))))},save:function({attributes:e}){const t=n.useBlockProps.save();return console.log("From Save: ",e),(0,a.createElement)("div",{...t},(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.description})),""!==e.price?(0,a.createElement)("div",{style:{display:"flex"}},(0,a.createElement)("p",{className:"kwd-price"},"$"),(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.price,className:"kwd-price"})):(0,a.createElement)("p",{class:"kwd-pric"},"Available by ",(0,a.createElement)("a",{href:"/contact"},"special order")),(0,a.createElement)("div",{class:"kwd-product-section-container"},(0,a.createElement)("h2",null,"Specifications"),(0,a.createElement)("div",{className:"kwd-product-specs-container"},(0,a.createElement)("div",{style:{display:"flex",flexDirection:"column"}},(0,a.createElement)("h2",null,"Materials"),e.materials?e.materials.map(((e,t)=>(0,a.createElement)("div",{key:t,className:"kwd-materials-grid"},(0,a.createElement)(n.RichText.Content,{tagName:"p",format:"string",value:`${e.piece}:`,className:"kwd-mats-piece"}),(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.madeFrom,className:"kwd-mats-made-from"})))):""),(0,a.createElement)("div",{style:{display:"flex",flexDirection:"column"}},(0,a.createElement)("h2",null,"Measurements"),e.measurements?e.measurements.map(((e,t)=>""!==e.value?(0,a.createElement)("div",{key:t,style:{display:"flex",gap:"1rem"}},(0,a.createElement)("p",{className:"kwd-measurement-name"},e.name),(0,a.createElement)("div",{className:"kwd-measurements-grid"},(0,a.createElement)(n.RichText.Content,{tagName:"p",value:e.value,className:"kwd-measurement-value"}),(0,a.createElement)("p",{className:"kwd-measurement-unit"},e.unit))):void 0)):null))))}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,r,i)=>{if(!a){var l=1/0;for(o=0;o<e.length;o++){a=e[o][0],r=e[o][1],i=e[o][2];for(var c=!0,m=0;m<a.length;m++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](a[m])))?a.splice(m--,1):(c=!1,i<l&&(l=i));if(c){e.splice(o--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[a,r,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,l=a[0],c=a[1],m=a[2],s=0;if(l.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(m)var o=m(n)}for(t&&t(a);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(o)},a=self.webpackChunkkonomoto_product_block=self.webpackChunkkonomoto_product_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[431],(()=>n(259)));r=n.O(r)})();