import{j as e,c as r,N as i,a as o,b as x,s as c,B as d,d as l}from"./index-_YaFUI7l.js";import{u as h}from"./useNannieState-CKd2nZjx.js";import{N as p}from"./Nannies-C6llFGFH.js";const m=()=>e.jsx("div",{className:"flex h-[80dvh] w-full items-center justify-center xs:px-2 sm:px-4",children:e.jsxs("div",{className:r("flex max-w-[700px] flex-col gap-6 rounded-[30px] border","border-skin-primary border-opacity-40 p-12 text-center"),children:[e.jsx("h2",{children:"No favorites nannies yet?"}),e.jsx("p",{children:"Add nannies to your favorites list, and find the perfect match for your family. Go back to the nannies page to choose the one that best suits your needs."}),e.jsx(i,{className:r("mx-auto flex h-[52px] max-w-[240px] items-center justify-center","rounded-[30px] border border-transparent bg-skin-background px-6","text-skin-inverted transition-all hover:border-skin-primary","duration-300 hover:bg-skin-background-white hover:text-skin-theme"),to:"/nannies",children:"Back to all nannies"})]})}),u=()=>{const t=o(),s=x(c),n=()=>{t(l("Show all"))};return e.jsx("div",{className:"flex h-[80dvh] w-full items-center justify-center xs:px-2 sm:px-4",children:e.jsxs("div",{className:r("flex max-w-[700px] flex-col gap-6 rounded-[30px] p-12","border border-skin-primary border-opacity-40 text-center"),children:[e.jsxs("h2",{children:["No favorites with"," ",e.jsx("span",{className:"text-skin-theme underline",children:`"${s}"`})," ","sort parameter"]}),e.jsx("p",{children:"Try to chose different sorter parameters"}),e.jsx(d,{text:"Reset sorter",type:"button",onClick:n,className:r("mx-auto flex max-w-[240px] items-center justify-center transition-all","rounded-[30px] border border-transparent bg-skin-background px-6","h-[52px] text-skin-inverted duration-300 hover:border-skin-primary","hover:bg-skin-background-white hover:text-skin-theme")})]})})},j=()=>{const{filteredFavorites:t,favorites:s}=h(),n=s.length>0,a=t.length>0;return e.jsx(e.Fragment,{children:n?e.jsx(e.Fragment,{children:a?e.jsx(p,{nannies:t}):e.jsx(u,{})}):e.jsx(m,{})})};export{j as default};