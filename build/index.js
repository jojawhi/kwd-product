(()=>{"use strict";var e,t={227:()=>{const e=window.wp.blocks,t=(window.wp.i18n,window.wp.element),n=window.wp.blockEditor,a=JSON.parse('{"u2":"create-block/konomoto-product-block"}');(0,e.registerBlockType)(a.u2,{edit:function({attributes:e,setAttributes:a}){const[l,r]=(0,t.useState)({description:"",price:"",materials:[{piece:"",madeFrom:""}],measurements:[{name:"Length:",value:"",unit:"cm"},{name:"Width:",value:"",unit:"cm"},{name:"Height:",value:"",unit:"cm"},{name:"Depth:",value:"",unit:"cm"}]}),m=e=>{const{value:t,name:n}=e.target;""===t&&null===t||r({...l,[n]:t})},o=(e,t)=>{const{value:n,name:a}=e.target,m=l.materials;a.includes("piece")?(m[t].piece=n,r({...l,materials:m})):a.includes("madeFrom")&&(m[t].madeFrom=n,r({...l,materials:m})),console.log("Material changed")},i=(e,t)=>{const{value:n,name:a}=e.target,m=l.measurements;a.includes("unit")?(m[t].unit=n,r({...l,measurements:m}),console.log("Unit change: ",l.measurements)):(m[t].value=n,r({...l,measurements:m}),console.log("Measurement change: ",l.measurements)),console.log("Measurement changed")};return(0,t.createElement)("div",{...(0,n.useBlockProps)()},(0,t.createElement)("div",null,(0,t.createElement)("label",{htmlFor:"description"},"Description:"),(0,t.createElement)("textarea",{name:"description",id:"description",value:l.description,placeholder:"Enter a description...",onChange:e=>m(e)})),(0,t.createElement)("div",null,(0,t.createElement)("label",{htmlFor:"price"},"$"),(0,t.createElement)("input",{type:"number",name:"price",id:"price",value:l.price,placeholder:"9999",onChange:e=>m(e)})),(0,t.createElement)("div",null,(0,t.createElement)("h3",null,"Materials"),(0,t.createElement)("div",{style:{display:"flex"}},(0,t.createElement)("h3",null,"Piece"),(0,t.createElement)("h3",null,"Material")),l.materials.map(((e,n)=>(0,t.createElement)("div",{key:n},(0,t.createElement)("input",{type:"text",id:`piece-${n}`,name:`piece-${n}`,value:e.piece,placeholder:"Piece name",onChange:e=>o(e,n)}),(0,t.createElement)("input",{type:"text",id:`madeFrom-${n}`,name:`madeFrom-${n}`,value:e.madeFrom,placeholder:"Made from...",onChange:e=>o(e,n)}),(0,t.createElement)("button",{onClick:e=>((e,t)=>{let n=l.materials;n.splice(t,1),r({...l,materials:n})})(0,n)},"- Remove")))),(0,t.createElement)("button",{onClick:()=>{const e=l.materials;e.push({piece:"",madeFrom:""}),r({...l,materials:e})}},"+ Add Part")),(0,t.createElement)("div",null,(0,t.createElement)("h3",null,"Measurements"),l.measurements.map(((e,n)=>(0,t.createElement)("div",{key:n},(0,t.createElement)("label",{htmlFor:e.name},e.name),(0,t.createElement)("input",{type:"number",id:`measurement-${n}`,name:e.name,value:e.value,placeholder:"0",onChange:e=>i(e,n)}),(0,t.createElement)("select",{name:`${e.name}-unit`,id:`${e.name}-unit`,onChange:e=>i(e,n)},(0,t.createElement)("option",{value:"cm",selected:!0},"cm"),(0,t.createElement)("option",{value:"in"},"in"),(0,t.createElement)("option",{value:"m"},"m"),(0,t.createElement)("option",{value:"ft"},"ft")))))))},save:function(){return null}})}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,l,r)=>{if(!n){var m=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],r=e[u][2];for(var o=!0,i=0;i<n.length;i++)(!1&r||m>=r)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(o=!1,r<m&&(m=r));if(o){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,l,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,m=n[0],o=n[1],i=n[2],c=0;if(m.some((t=>0!==e[t]))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(i)var u=i(a)}for(t&&t(n);c<m.length;c++)r=m[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self.webpackChunkkonomoto_product_block=self.webpackChunkkonomoto_product_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=a.O(void 0,[431],(()=>a(227)));l=a.O(l)})();