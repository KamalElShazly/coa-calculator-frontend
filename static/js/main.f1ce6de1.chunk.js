(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var l=a(1),s=a.n(l),r=a(29),i=a.n(r),n=a(83),o=a(59),c=(a(35),a(6)),u=a(214),b=a(199),j=a(224),x=a(211),p=a(212),m=a(213),d=a(0),g=function(e){var t=e.title;e.currentTheme,e.updateTheme;return Object(d.jsx)(x.a,{position:"relative",children:Object(d.jsx)(p.a,{children:Object(d.jsx)(m.a,{variant:"h6",color:"inherit",noWrap:!0,children:t})})})},v=a(196),O=a(216),h=function(e){var t=e.maxValue,a=e.attributeName,l=e.updateAttribute,r=e.updateAttribute2,i=e.isCurrentLevel,n=s.a.useState(null),o=Object(c.a)(n,2),b=o[0],j=o[1],x=s.a.useState(0),p=Object(c.a)(x,2),m=p[0],g=p[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(u.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(d.jsx)(v.a,{label:a,type:"number",value:b,onFocus:function(e){e.target.select()},onChange:function(e){!function(e,a){var s;(a=Math.floor(a))>0||null===a?e>t||a>=t?(s=t,j(t)):j(s=a):a<0?(s=0,j(0)):(j(a),s=a),l(s)}(b,e.target.valueAsNumber)},sx:{"& > :not(style)":{margin:1,maxWidth:"25ch",minWidth:"25ch"}}}),i?Object(d.jsx)(v.a,{type:"number",value:m,InputProps:{endAdornment:Object(d.jsx)(O.a,{children:"%"})},onFocus:function(e){e.target.select()},onBlur:function(e){var t;t=e.target.valueAsNumber,console.log("Value: ",t),Number.isNaN(t)&&(g(0),r(0))},onChange:function(e){!function(e,t,a){var l;(t=Math.floor(t))>0||null===t?e>a||t>=a?(l=a,g(a)):g(l=t):t<0?(l=0,g(0)):(g(t),l=t),r(l)}(m,e.target.valueAsNumber,99)},sx:{"& > :not(style)":{margin:1,minWidth:"8ch",maxWidth:"8ch"}}}):Object(d.jsx)(d.Fragment,{})]})})},f=a(215),S=a(200),k=a(217),C=a(55),y=function(e){var t=e.level,a=e.levelPercentage,l=e.targetLevel,r=e.element,i=e.boosts,n=e.keywords,o=e.applyBoostOnSmelt,b=e.buyOrSmeltBars,j=e.skill,x=e.lolliPrice,p=s.a.useState(0),m=Object(c.a)(p,2),g=m[0],v=m[1],O=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},h=function(e){for(var t=0;t<i.length;t++)i[t].active&&(e*=i[t].value);return Math.floor(e)};return s.a.useEffect((function(){var e=parseInt(C[t])+(parseInt(C[t+1])-parseInt(C[t]))*a,s=C[l];v(Math.ceil(s-e))}),[C,t,l,a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:g<=0||isNaN(parseFloat(g))?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(f.a,{dense:!0,children:[Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Total exp: "+O(g),secondary:""})}),Object(d.jsx)(S.a,{children:"loading"===r[0]?Object(d.jsx)(d.Fragment,{}):"Combat"===j?Object(d.jsx)(k.a,{primary:"Total "+r[0]+": "+O(Math.ceil(g/h(r[1].xp)))+" ("+r[1].xp+" exp per kill)"}):"Smithing"===j?b?Object(d.jsx)(k.a,{primary:"Total "+r[0]+" "+n[0]+": "+O(Math.ceil(g/h(r[1]["xp-forge"])))}):o?Object(d.jsx)(k.a,{primary:"Total "+r[0]+" "+n[0]+": "+O(Math.ceil(g/(h(r[1]["xp-forge"])+h(r[1]["xp-smelt"]))))}):Object(d.jsx)(k.a,{primary:"Total "+r[0]+" "+n[0]+": "+O(Math.ceil(g/(h(r[1]["xp-forge"])+parseFloat(r[1]["xp-smelt"]))))}):"Crafting"===j&&"Cursed"===r[0]?Object(d.jsx)(k.a,{primary:"Total "+r[0]+" Relics: "+O(Math.ceil(g/h(r[1].xp)))}):Object(d.jsx)(k.a,{primary:"Total "+n[0]+" "+r[0]+": "+O(Math.ceil(g/h(r[1].xp)))})}),"loading"===r[0]?Object(d.jsx)(d.Fragment,{}):"Combat"===j?Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Total gold: "+O(Math.ceil(g/h(r[1].xp))*r[1].gold)+" ("+r[1].gold+" gold per kill)"})}):Object.keys(r[1].submaterials).map((function(e){return Object(d.jsx)(S.a,{children:"Smithing"===j?b?Object(d.jsx)(k.a,{primary:"Total "+e+": "+O(Math.ceil(g/h(r[1]["xp-forge"]))*r[1].submaterials[e])}):o?Object(d.jsx)(k.a,{primary:"Total "+e+": "+O(Math.ceil(g/(h(r[1]["xp-forge"])+h(r[1]["xp-smelt"])))*r[1].submaterials[e])}):Object(d.jsx)(k.a,{primary:"Total "+e+": "+O(Math.ceil(g/(h(r[1]["xp-forge"])+parseFloat(r[1]["xp-smelt"])))*r[1].submaterials[e])}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k.a,{primary:"Total "+e+": "+O(Math.ceil(g/h(r[1].xp))*r[1].submaterials[e])})})})})),"loading"===r[0]?Object(d.jsx)(d.Fragment,{}):"Crafting"===j?"Cursed"===r[0]||"Experience"===r[0]?Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Inventories (18 per inventory): "+O(Math.ceil(g/h(r[1].xp)/18))})}):Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Inventories (36 per inventory): "+O(Math.ceil(g/h(r[1].xp)/36))})}):"Cooking"===j?Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Inventories (18 fish and 18 salt): "+O(Math.ceil(g/h(r[1].xp)/18))})}):"Mining"===j||"Woodcutting"===j?Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Inventories (36 per inventory): "+O(Math.ceil(g/h(r[1].xp)/36))})}):"Fishing"===j&&"Bass bait"===r[0]?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Total Remote Bank (34 bass per inventory): "+O(Math.ceil(g/h(r[1].xp)/34))})}),Object(d.jsx)(S.a,{children:Object(d.jsx)(k.a,{primary:"Total Remote Bank price: "+O(Math.ceil(g/h(r[1].xp)/34*parseInt(x)*.4))+" Gold"})})]}):Object(d.jsx)(d.Fragment,{})]})})})},B=a(5),T=a(220),L=a(205),M=a(201),F=a(218),w=a(219),I=a(94),A=a.n(I),W=Object(B.a)(L.a)((function(e){var t=e.theme;return{"&.Mui-selected":{borderColor:"#2e7d32",borderRadius:9},"& .MuiToggleButtonGroup-grouped":{margin:t.spacing(.5),borderRadius:t.shape.borderRadius,borderColor:"#bdbdbd","&.Mui-disabled":{},"&:not(:first-of-type)":{borderRadius:t.shape.borderRadius,borderColor:"#bdbdbd"},"&:first-of-type":{borderRadius:t.shape.borderRadius,borderColor:"#bdbdbd"}}}})),E=function(e){var t=e.updateElement,a=e.skillsData,l=e.skill,r=e.currentLevel,i=s.a.useState(),n=Object(c.a)(i,2),o=n[0],b=n[1],j=function(e,s){"loading"!==e.currentTarget.value&&(b(s),t(null===s?["loading"]:[e.currentTarget.value,a[l][e.currentTarget.value]]))},x=function(e){return Object(d.jsx)(u.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",maxWidth:600,marginBottom:.4,marginLeft:"auto",marginRight:"auto"},children:Object(d.jsxs)(M.a,{children:[Object(d.jsx)(F.a,{expandIcon:Object(d.jsx)(A.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(d.jsxs)(m.a,{children:["Level ",e[0],"-",e[1]]})}),Object(d.jsx)(w.a,{children:Object.keys(a[l]).map((function(t){return parseInt(a[l][t].level)>=e[0]&&parseInt(a[l][t].level)<=e[1]?Object(d.jsx)(W,{size:"small",value:o,exclusive:!0,onChange:j,sx:{padding:0},children:Object(d.jsxs)(T.a,{value:t,onClick:j,sx:{"& > :not(style)":{display:"flex",alignItems:"center",justifyContent:"center"}},children:[Object(d.jsx)(u.a,{sx:{marginRight:.4},children:Object(d.jsx)("img",{src:"/images/".concat(l,"/").concat(t,".gif"),width:"22",height:"22",value:t,alt:""})}),t]})}):Object(d.jsx)(d.Fragment,{})}))})]})})};return Object(d.jsx)(u.a,{sx:{"& > :not(style)":{display:"flex",flexWrap:"wrap",justifyContent:"center",maxWidth:450,marginLeft:"auto",marginRight:"auto"}},children:void 0!==a[l]?"Combat"===l?Object(d.jsxs)(u.a,{sx:{marginTop:2,marginBottom:3},children:[x([1,50]),x([51,70]),x([71,90]),x([91,150])]}):Object(d.jsx)(W,{size:"small",value:o,exclusive:!0,onChange:j,sx:{padding:1},children:Object.keys(a[l]).map((function(e){return r>=parseInt(a[l][e].level)?Object(d.jsxs)(T.a,{value:e,onClick:j,sx:{"& > :not(style)":{display:"flex",alignItems:"center",justifyContent:"center"}},children:[Object(d.jsx)(u.a,{sx:{marginRight:.4},children:Object(d.jsx)("img",{src:"/images/".concat(l,"/").concat(e,".gif"),width:"22",height:"22",value:e,alt:""})}),e]}):Object(d.jsxs)(T.a,{value:e,disabled:!0,sx:{"& > :not(style)":{display:"flex",alignItems:"center",justifyContent:"center"}},children:[Object(d.jsx)(u.a,{sx:{marginRight:.4},children:Object(d.jsx)("img",{src:"/images/".concat(l,"/Gray ").concat(e,".gif"),width:"22",height:"22",value:e,alt:""})}),e]})}))}):Object(d.jsx)(T.a,{value:"loading",children:"Loading..."})})},P=Object(B.a)(L.a)((function(e){var t=e.theme;return{"& .Mui-selected":{color:"error"},"& .MuiToggleButtonGroup-grouped":{borderColor:"#bdbdbd","&:not(:first-of-type)":{},"&:first-of-type":{marginLeft:t.spacing(1)},"&:last-of-type":{marginRight:t.spacing(1)}}}})),R=function(e){var t=e.boosts,a=e.updateBoosts,l=s.a.useState([]),r=Object(c.a)(l,2),i=r[0],n=r[1],o=function(e,l){n(l);for(var s=t,r=0;r<s.length;r++)s[r].name===e.currentTarget.value&&(s[r].active=!t[r].active);a(s)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginBottom:1,marginTop:1},children:Object(d.jsx)(P,{size:"small",value:i,onChange:o,children:void 0!==t?t.map((function(e){return Object(d.jsxs)(T.a,{value:e.name,sx:{"& > :not(style)":{display:"flex",alignItems:"center",justifyContent:"center"}},children:[Object(d.jsx)(u.a,{sx:{marginRight:.4},children:"Small or Medium Exp Pot"===e.name?Object(d.jsx)("img",{src:"/images/Boosts/".concat(e.name,".gif"),width:"27",height:"22",value:e.name,onClick:o,alt:""}):Object(d.jsx)("img",{src:"/images/Boosts/".concat(e.name,".gif"),width:"22",height:"22",value:e.name,onClick:o,alt:""})}),e.name+" (+"+Math.floor(100*(e.value-1))+"%)"]})})):Object(d.jsx)(d.Fragment,{})})})})},N=a(206),D=a(207),V=function(){return Object(d.jsx)(u.a,{component:"footer",sx:{marginTop:5,marginBottom:2},children:Object(d.jsxs)(N.a,{maxWidth:"lg",children:[Object(d.jsxs)(m.a,{variant:"body2",align:"center",color:"text.secondary",component:"p",children:["Bugs? Suggestions? DM me on Discord:"," ",Object(d.jsx)(D.a,{color:"inherit",href:"https://discordapp.com/users/chends#7176",rel:"noopener",target:"_blank",children:"chends#7176"})]}),Object(d.jsxs)(m.a,{variant:"body2",align:"center",color:"text.secondary",component:"p",children:["Huge thanks to the contributor:"," ",Object(d.jsx)(D.a,{color:"inherit",href:"https://discordapp.com/users/KaMaL#9365",rel:"noopener",target:"_blank",children:"KaMaL#9365"})]}),Object(d.jsxs)(m.a,{variant:"body2",color:"text.secondary",align:"center",children:["All data from ",Object(d.jsx)(D.a,{color:"inherit",href:"https://www.curseofaros.com/",rel:"noopener",target:"_blank",children:"Curse of Aros"})," ",(new Date).getFullYear(),"."]})]})})},G=a(221),Y=a(208),U=Object(B.a)("div")((function(e){var t=e.theme;return Object(o.a)({},t.typography.button)})),z=function(e){var t=e.value,a=e.updateValue,l=e.falseText,s=e.trueText;return Object(d.jsx)(u.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:Object(d.jsxs)(Y.a,{container:!0,sx:{flexGrow:1,flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom:1,marginTop:1},spacing:0,children:[Object(d.jsx)(U,{children:l}),Object(d.jsx)(Y.a,{item:!0,children:Object(d.jsx)(G.a,{onChange:function(){a(!t)},color:"default"})}),Object(d.jsx)(U,{children:s})]})})},J=a(202),q=a(222),H=a(223),_=function(e){var t=e.applyBoostOnSmelt,a=e.updateApplyBoostOnSmelt;return Object(d.jsx)(u.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:Object(d.jsx)(q.a,{children:Object(d.jsx)(H.a,{control:Object(d.jsx)(J.a,{checked:t,onChange:function(){a(!t)}}),label:"Apply Boosts on bar Smelting"})})})},K=a(38),Q=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1},{name:"Infernal Ring",value:1.04,active:!1},{name:"Infernal Hammer",value:1.04,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1],M=Object(l.useState)(!1),F=Object(c.a)(M,2),w=F[0],I=F[1],A=Object(l.useState)(!0),W=Object(c.a)(A,2),P=W[0],N=W[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Smithing Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Smithing Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:K,skill:"Smithing",currentLevel:a}),Object(d.jsx)(z,{value:P,updateValue:function(e){N(e)},trueText:"Smelt Bars",falseText:"Buy Bars"}),Object(d.jsx)(_,{applyBoostOnSmelt:w,updateApplyBoostOnSmelt:function(e){I(e)}}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:["Bars"],boosts:T,applyBoostOnSmelt:w,buyOrSmeltBars:P,skill:"Smithing",boostsDidUpdate:S}),Object(d.jsx)(V,{})]})},X=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Crafting Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Crafting Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:K,skill:"Crafting",currentLevel:a}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e,t){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:["Relics of"],boosts:T,boostsDidUpdate:S,skill:"Crafting"}),Object(d.jsx)(V,{})]})},Z=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=function(e){v(e)},f=Object(l.useState)(!1),S=Object(c.a)(f,2),k=S[0],C=S[1],B=Object(l.useState)([{name:"World Boost",value:1.5,active:!1}]),T=Object(c.a)(B,2),L=T[0],M=T[1],F=Object(l.useState)(!1),w=Object(c.a)(F,2),I=w[0],A=w[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Cooking Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Cooking Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),!0===I?Object(d.jsx)(E,{updateElement:O,skillsData:K,skill:"Cooking-Baits",currentLevel:a}):Object(d.jsx)(E,{updateElement:O,skillsData:K,skill:"Cooking",currentLevel:a}),Object(d.jsx)(z,{value:I,updateValue:function(e){A(e)},falseText:"Food",trueText:"Bait"}),Object(d.jsx)(R,{boosts:L,updateBoosts:function(e,t){M(e),C(!k)}}),!0===I?Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:[""],boosts:L,boostsDidUpdate:k,skill:"Cooking"}):Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:["Cooked"],boosts:L,boostsDidUpdate:k,skill:"Cooking"}),Object(d.jsx)(V,{})]})},$=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Tailoring Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Tailoring Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:K,skill:"Tailoring",currentLevel:a}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e,t){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:[""],boosts:T,boostsDidUpdate:S,skill:"Tailoring"}),Object(d.jsx)(V,{})]})},ee=a(46),te=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(1),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(0),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1},{name:"Prospector's Necklace",value:1.05,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Mining Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){x(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Mining Level",updateAttribute:function(e){o(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:ee,skill:"Mining",currentLevel:a}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e,t){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:j,targetLevel:n,element:g,keywords:[""],boosts:T,boostsDidUpdate:S,skill:"Mining"}),Object(d.jsx)(V,{})]})},ae=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Woodcutting Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Woodcutting Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:ee,skill:"Woodcutting",currentLevel:a}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e,t){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:[""],boosts:T,boostsDidUpdate:S,skill:"Woodcutting"}),Object(d.jsx)(V,{})]})},le=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=function(e){v(e)},f=Object(l.useState)(0),S=Object(c.a)(f,2),k=S[0],C=S[1],B=Object(l.useState)(!1),T=Object(c.a)(B,2),L=T[0],M=T[1],F=Object(l.useState)([{name:"World Boost",value:1.5,active:!1}]),w=Object(c.a)(F,2),I=w[0],A=w[1],W=Object(l.useState)(!1),P=Object(c.a)(W,2),N=P[0],D=P[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{maxValue:120,attributeName:"Your Fishing Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Fishing Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),!0===N?Object(d.jsx)(E,{updateElement:O,skillsData:ee,skill:"Fishing-Baits",currentLevel:a}):Object(d.jsx)(E,{updateElement:O,skillsData:ee,skill:"Fishing",currentLevel:a}),Object(d.jsx)(z,{value:N,updateValue:function(e){D(e)},falseText:"Fish",trueText:"Bait"}),Object(d.jsx)(R,{boosts:I,updateBoosts:function(e,t){A(e),M(!L)}}),"Bass bait"===g[0]?Object(d.jsx)(h,{maxValue:9999999999,attributeName:"Current Lolli Price",updateAttribute:function(e){C(e)},sx:{justifyContent:"center",alignItems:"center"}}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,keywords:[""],boosts:I,boostsDidUpdate:L,skill:"Fishing",lolliPrice:k}),Object(d.jsx)(V,{})]})},se=a(198),re=a(95),ie=function(){var e=Object(l.useState)(1),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(l.useState)(0),i=Object(c.a)(r,2),n=i[0],o=i[1],u=Object(l.useState)(1),b=Object(c.a)(u,2),j=b[0],x=b[1],p=Object(l.useState)(["loading"]),m=Object(c.a)(p,2),g=m[0],v=m[1],O=Object(l.useState)(!1),f=Object(c.a)(O,2),S=f[0],k=f[1],C=Object(l.useState)([{name:"World Boost",value:1.5,active:!1},{name:"Exp Relic",value:1.05,active:!1},{name:"Small or Medium Exp Pot",value:1.05,active:!1},{name:"Large Exp Pot",value:1.1,active:!1}]),B=Object(c.a)(C,2),T=B[0],L=B[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(se.a,{severity:"info",children:"Missing or bugged icons will be updated once new sprites are released"}),Object(d.jsx)(h,{maxValue:120,attributeName:"Your Combat Level",updateAttribute:function(e){s(e)},updateAttribute2:function(e){o(e/=100)},isCurrentLevel:!0}),Object(d.jsx)(h,{maxValue:120,attributeName:"Target Combat Level",updateAttribute:function(e){x(e)},sx:{justifyContent:"center",alignItems:"center"}}),Object(d.jsx)(E,{updateElement:function(e){v(e)},skillsData:re,skill:"Combat"}),Object(d.jsx)(R,{boosts:T,updateBoosts:function(e,t){L(e),k(!S)}}),Object(d.jsx)(y,{level:a,levelPercentage:n,targetLevel:j,element:g,boosts:T,keywords:[""],skill:"Combat"}),Object(d.jsx)(V,{})]})},ne=function(e){var t=e.match,a=e.history,l=e.currentTheme,r=e.updateCurrentTheme,i=t.params.page,n={0:"smithing",1:"crafting",2:"cooking",3:"tailoring",4:"mining",5:"woodcutting",6:"fishing",7:"combat"},o=s.a.useState({smithing:0,crafting:1,cooking:2,tailoring:3,mining:4,woodcutting:5,fishing:6,combat:7}[i]),x=Object(c.a)(o,2),p=x[0],m=x[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{title:"Curse of Aros Skills Calculator",updateTheme:r,currentTheme:l}),Object(d.jsx)(u.a,{sx:{width:"100%"},children:Object(d.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider",marginBottom:1},children:Object(d.jsxs)(b.a,{value:p,onChange:function(e,t){console.log(t),a.push("/".concat(n[t])),m(t)},variant:"scrollable",children:[Object(d.jsx)(j.a,{label:"Smithing"}),Object(d.jsx)(j.a,{label:"Crafting"}),Object(d.jsx)(j.a,{label:"Cooking"}),Object(d.jsx)(j.a,{label:"Tailoring"}),Object(d.jsx)(j.a,{label:"Mining"}),Object(d.jsx)(j.a,{label:"Woodcutting"}),Object(d.jsx)(j.a,{label:"Fishing"}),Object(d.jsx)(j.a,{label:"Combat"})]})})}),0===p&&Object(d.jsx)(Q,{}),1===p&&Object(d.jsx)(X,{}),2===p&&Object(d.jsx)(Z,{}),3===p&&Object(d.jsx)($,{}),4===p&&Object(d.jsx)(te,{}),5===p&&Object(d.jsx)(ae,{}),6===p&&Object(d.jsx)(le,{}),7===p&&Object(d.jsx)(ie,{})]})},oe=a(17),ce=a(96),ue=a.n(ce),be=function(e){var t=e.currentTheme,a=e.updateCurrentTheme;return Object(d.jsx)(ue.a,{children:Object(d.jsxs)(oe.d,{children:[Object(d.jsx)(oe.a,{exact:!0,from:"/",to:"/smithing"}),Object(d.jsx)(oe.b,{exact:!0,path:"/:page?",render:function(e){return Object(d.jsx)(ne,Object(o.a)(Object(o.a)({},e),{},{currentTheme:t,updateCurrentTheme:a}))}})]})})},je=a(195),xe=a(98),pe=a(204),me=Object(xe.a)({palette:{mode:"dark"}}),de=document.getElementById("root");i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(n.a,{children:Object(d.jsxs)(pe.a,{theme:me,children:[Object(d.jsx)(je.a,{}),Object(d.jsx)(be,{})]})})}),de)},35:function(e,t,a){},38:function(e){e.exports=JSON.parse('{"Smithing":{"Bronze":{"level":"1","xp-forge":"5","xp-smelt":"3","submaterials":{"Copper":"2","Tin Ore":"2"}},"Iron":{"level":"10","xp-forge":"14","xp-smelt":"8","submaterials":{"Iron Ore":"3"}},"Steel":{"level":"20","xp-forge":"20","xp-smelt":"14","submaterials":{"Iron Ore":"2","Coal":"1"}},"Crimsteel":{"level":"30","xp-forge":"130","xp-smelt":"25","submaterials":{"Crimsteel Ore":"2","Coal":"2"}},"Gold":{"level":"40","xp-forge":"20000","xp-smelt":"60","submaterials":{"Gold Ore":"320"}},"Mythan":{"level":"50","xp-forge":"5000","xp-smelt":"100","submaterials":{"Mythan Ore":"10","Coal":"5"}},"Cobalt":{"level":"60","xp-forge":"15000","xp-smelt":"200","submaterials":{"Cobalt Ore":"8","Coal":"5"}},"Varaxite":{"level":"70","xp-forge":"20000","xp-smelt":"350","submaterials":{"Varaxium":"6","Cobalt Ore":"3"}},"Magic":{"level":"80","xp-forge":"26000","xp-smelt":"400","submaterials":{"Magic Ore":"9"}}},"Cooking":{"Anchovies":{"level":"1","xp":"10","submaterials":{"Anchovies":"1","Salt":"1"}},"Mackerel":{"level":"10","xp":"50","submaterials":{"Mackerel":"1","Salt":"1"}},"Squid":{"level":"20","xp":"115","submaterials":{"Squid":"1","Salt":"1"}},"Sardine":{"level":"20","xp":"375","submaterials":{"Sardine":"1","Salt":"1"}},"Eel":{"level":"40","xp":"500","submaterials":{"Eel":"1","Salt":"1"}},"Anglerfish":{"level":"45","xp":"625","submaterials":{"Anglerfish":"1","Salt":"1"}},"Trout":{"level":"50","xp":"750","submaterials":{"Trout":"1","Salt":"1"}},"Bass":{"level":"60","xp":"1350","submaterials":{"Bass":"1","Pink Salt":"1"}},"Tuna":{"level":"70","xp":"2000","submaterials":{"Tuna":"1","Pink Salt":"1"}},"Lobster":{"level":"75","xp":"3500","submaterials":{"Lobster":"1","Pink Salt":"1"}},"Sea Turtle":{"level":"80","xp":"6500","submaterials":{"Sea Turtle":"1","Pink Salt":"1"}},"Manta Ray":{"level":"85","xp":"9500","submaterials":{"Manta Ray":"1","Pink Salt":"1"}},"Shark":{"level":"90","xp":"13500","submaterials":{"Shark":"1","Black Salt":"1"}},"Orca":{"level":"95","xp":"22500","submaterials":{"Orca":"1","Black Salt":"1"}},"Giant Squid":{"level":"100","xp":"41500","submaterials":{"Giant Squid":"1","Black Salt":"1"}}},"Cooking-Baits":{"Earthworm":{"level":"1","xp":"5","submaterials":{"Salt":"1"}},"Iceworm":{"level":"10","xp":"82.5","submaterials":{"Salt":"1"}},"Corpseworm":{"level":"30","xp":"375","submaterials":{"Salt":"1"}},"Toxic Worm":{"level":"40","xp":"500","submaterials":{"Salt":"1"}},"Sandworm":{"level":"45","xp":"625","submaterials":{"Salt":"1"}},"Beetle":{"level":"50","xp":"375","submaterials":{"Salt":"1"}},"Grasshopper":{"level":"60","xp":"675","submaterials":{"Pink Salt":"1"}},"Wasp":{"level":"70","xp":"2000","submaterials":{"Pink Salt":"1"}},"Scallop":{"level":"75","xp":"5000","submaterials":{"Pink Salt":"1"}},"Crab":{"level":"85","xp":"9500","submaterials":{"Pink Salt":"1"}},"Bass bait":{"level":"90","xp":"25833.33","submaterials":{"Black Salt":"1"}}},"Crafting":{"Accuracy":{"level":"1","xp":"3","submaterials":{"Pine Logs":"1"}},"Guarding":{"level":"5","xp":"8","submaterials":{"Dead Logs":"1"}},"Healing":{"level":"10","xp":"18","submaterials":{"Birch Logs":"1"}},"Wealth":{"level":"20","xp":"40","submaterials":{"Applewood":"1"}},"Power":{"level":"30","xp":"105","submaterials":{"Willow Logs":"1"}},"Nature":{"level":"40","xp":"200","submaterials":{"Oak Logs":"1"}},"Fire":{"level":"50","xp":"425","submaterials":{"Chestnut Logs":"1"}},"Damage":{"level":"60","xp":"900","submaterials":{"Maple Logs":"1"}},"Leeching":{"level":"70","xp":"1400","submaterials":{"Olive Logs":"1"}},"Experience":{"level":"75","xp":"1850","submaterials":{"Maple Logs":"1","Olive Logs":"1"}},"Ice":{"level":"80","xp":"2750","submaterials":{"Magic Logs":"2"}},"Cursed":{"level":"88","xp":"4120","submaterials":{"Palm Wood":"2"}}},"Tailoring":{"Paper":{"level":"1","xp":"1","submaterials":{"Pine Logs":"1"}},"Book":{"level":"3","xp":"5","submaterials":{"Paper":"5","Leather":"1"}},"Ember Tome":{"level":"5","xp":"12","submaterials":{"Book":"1","Relic of Fire":"1","Magic Essence":"1"}},"Leech Tome":{"level":"9","xp":"20","submaterials":{"Book":"1","Relic of Nature":"1","Magic Essence":"1"}},"Icicle Tome":{"level":"15","xp":"28","submaterials":{"Book":"1","Ice Relic":"1","Magic Essence":"1"}},"Haunt Tome":{"level":"20","xp":"40","submaterials":{"Book":"1","Cursed Relic":"1","Magic Essence":"1"}},"Ignite Tome":{"level":"29","xp":"100","submaterials":{"Book":"1","Relic of Fire":"1","Magic Essence":"5"}},"Drain Tome":{"level":"33","xp":"115","submaterials":{"Book":"1","Relic of Nature":"1","Magic Essence":"3"}},"Freeze Tome":{"level":"40","xp":"200","submaterials":{"Book":"1","Ice Relic":"1","Magic Essence":"3"}},"Curse Tome":{"level":"60","xp":"900","submaterials":{"Book":"1","Cursed Relic":"1","Magic Essence":"3"}},"Inferno Tome":{"level":"68","xp":"1380","submaterials":{"Book":"1","Relic of Fire":"1","Magic Essence":"10"}},"Consume Tome":{"level":"76","xp":"2110","submaterials":{"Book":"1","Relic of Nature":"1","Magic Essence":"6"}},"Blizzard Tome":{"level":"80","xp":"2750","submaterials":{"Book":"1","Ice Relic":"1","Magic Essence":"6"}},"Torture Tome":{"level":"92","xp":"4300","submaterials":{"Book":"1","Cursed Relic":"1","Magic Essence":"6"}}}}')},46:function(e){e.exports=JSON.parse('{"Mining":{"Tin":{"level":"1","xp":"10","submaterials":{}},"Copper":{"level":"1","xp":"10","submaterials":{}},"Iron":{"level":"10","xp":"50","submaterials":{}},"Salt":{"level":"15","xp":"80","submaterials":{}},"Coal":{"level":"20","xp":"115","submaterials":{}},"Silver":{"level":"25","xp":"135","submaterials":{}},"Crimsteel":{"level":"30","xp":"350","submaterials":{}},"Gold":{"level":"40","xp":"400","submaterials":{}},"Pink Salt":{"level":"45","xp":"500","submaterials":{}},"Mythan":{"level":"50","xp":"650","submaterials":{}},"Sandstone":{"level":"55","xp":"1100","submaterials":{}},"Cobalt":{"level":"60","xp":"1200","submaterials":{}},"Varaxium":{"level":"70","xp":"1800","submaterials":{}},"Black Salt":{"level":"75","xp":"2500","submaterials":{}},"Magic":{"level":"80","xp":"3200","submaterials":{}}},"Woodcutting":{"Pine Logs":{"level":"1","xp":"10","submaterials":{}},"Dead Logs":{"level":"5","xp":"20","submaterials":{}},"Birch Logs":{"level":"10","xp":"50","submaterials":{}},"Applewood":{"level":"20","xp":"115","submaterials":{}},"Willow Logs":{"level":"30","xp":"350","submaterials":{}},"Oak Logs":{"level":"40","xp":"475","submaterials":{}},"Chestnut Logs":{"level":"50","xp":"650","submaterials":{}},"Maple Logs":{"level":"60","xp":"1200","submaterials":{}},"Olive Logs":{"level":"70","xp":"1800","submaterials":{}},"Magic Logs":{"level":"80","xp":"2600","submaterials":{}},"Palm Wood":{"level":"90","xp":"4000","submaterials":{}}},"Fishing":{"Anchovies":{"level":"1","xp":"10","submaterials":{"Earthworm":"1"}},"Goldfish":{"level":"5","xp":"20","submaterials":{"Earthworm":"1"}},"Mackerel":{"level":"10","xp":"50","submaterials":{"Iceworm":"1"}},"Squid":{"level":"20","xp":"115","submaterials":{"Iceworm":"1"}},"Sardine":{"level":"30","xp":"375","submaterials":{"Corpseworm":"1"}},"Eel":{"level":"40","xp":"500","submaterials":{"Toxic Worm":"1"}},"Anglerfish":{"level":"45","xp":"625","submaterials":{"Sandworm":"1"}},"Trout":{"level":"50","xp":"750","submaterials":{"Beetle":"1"}},"Jellyfish":{"level":"55","xp":"900","submaterials":{"Beetle":"1"}},"Bass":{"level":"60","xp":"1350","submaterials":{"Grasshopper":"1"}},"Herringbone":{"level":"65","xp":"1700","submaterials":{"Grasshopper":"1"}},"Tuna":{"level":"70","xp":"2000","submaterials":{"Wasp":"1"}},"Lobster":{"level":"75","xp":"3500","submaterials":{"Scallop":"1"}},"Sea Turtle":{"level":"80","xp":"6500","submaterials":{"Scallop":"1"}},"Manta Ray":{"level":"85","xp":"9500","submaterials":{"Crab":"1"}},"Shark":{"level":"90","xp":"14500","submaterials":{"Bass":"1"}},"Orca":{"level":"95","xp":"29500","submaterials":{"Bass":"1"}},"Giant Squid":{"level":"100","xp":"55000","submaterials":{"Bass":"1"}}},"Fishing-Baits":{"Earthworm":{"level":"1","xp":"15","submaterials":{}},"Iceworm":{"level":"10","xp":"82.5","submaterials":{}},"Corpseworm":{"level":"30","xp":"375","submaterials":{}},"Toxic Worm":{"level":"40","xp":"500","submaterials":{}},"Sandworm":{"level":"45","xp":"625","submaterials":{}},"Beetle":{"level":"50","xp":"825","submaterials":{}},"Grasshopper":{"level":"60","xp":"1525","submaterials":{}},"Wasp":{"level":"70","xp":"2000","submaterials":{}},"Scallop":{"level":"75","xp":"5000","submaterials":{}},"Crab":{"level":"85","xp":"9500","submaterials":{}},"Bass bait":{"level":"90","xp":"33000","submaterials":{}}}}')},55:function(e){e.exports=JSON.parse('{"1":"0","2":"46","3":"99","4":"159","5":"229","6":"309","7":"401","8":"507","9":"628","10":"768","11":"928","12":"1112","13":"1324","14":"1567","15":"1847","16":"2168","17":"2537","18":"2961","19":"3448","20":"4008","21":"4651","22":"5389","23":"6237","24":"7212","25":"8332","26":"9618","27":"11095","28":"12792","29":"14742","30":"16982","31":"19555","32":"22510","33":"25905","34":"29805","35":"34285","36":"39431","37":"45342","38":"52132","39":"59932","40":"68892","41":"79184","42":"91006","43":"104586","44":"120186","45":"138106","46":"158690","47":"182335","48":"209496","49":"240696","50":"276536","51":"317705","52":"364996","53":"419319","54":"481720","55":"553400","56":"635738","57":"730320","58":"838966","59":"963768","60":"1107128","61":"1271805","62":"1460969","63":"1678262","64":"1927866","65":"2214586","66":"2543940","67":"2922269","68":"3356855","69":"3856063","70":"4429503","71":"5088212","72":"5844870","73":"6714042","74":"7712459","75":"8859339","76":"10176758","77":"11690075","78":"13428420","79":"15425254","80":"17719014","81":"20353852","82":"23380486","83":"26857176","84":"30850844","85":"35438364","86":"40708040","87":"46761308","88":"53714688","89":"61702024","90":"70877064","91":"81416417","92":"93522954","93":"107429714","94":"123404386","95":"141754466","96":"162833172","97":"187046247","98":"214859767","99":"246809111","100":"283509271","101":"325666684","102":"374092835","103":"429719875","104":"493618564","105":"567018884","106":"651333710","107":"748186012","108":"859440093","109":"987237472","110":"1134038112","111":"1302667765","112":"1496372370","113":"1718880532","114":"1974475291","115":"2268076571","116":"2605335878","117":"2992745089","118":"3437761413","119":"3948950932","120":"4536153492"}')},95:function(e){e.exports=JSON.parse('{"Combat":{"Bat":{"level":"1","xp":"8","gold":"1"},"Slime":{"level":"4","xp":"16","gold":"3"},"Fishing Spider":{"level":"8","xp":"38","gold":"6"},"Mushroom":{"level":"10","xp":"46","gold":"7"},"Forest Spider":{"level":"12","xp":"55","gold":"8"},"Forest Bat":{"level":"15","xp":"60","gold":"10"},"Snow Bat":{"level":"18","xp":"125","gold":"35"},"Ice Slime":{"level":"21","xp":"165","gold":"45"},"Snowman":{"level":"25","xp":"210","gold":"59"},"Ice Spider":{"level":"28","xp":"250","gold":"80"},"Skeletal Snake":{"level":"30","xp":"300","gold":"110"},"Cave Spider":{"level":"34","xp":"350","gold":"145"},"Skeletal Bat":{"level":"35","xp":"385","gold":"170"},"Sapphire Scarab":{"level":"40","xp":"400","gold":"150"},"Cave Bat":{"level":"43","xp":"560","gold":"220"},"Scorpion":{"level":"45","xp":"700","gold":"100"},"Ice Fiend":{"level":"47","xp":"850","gold":"280"},"Raptor":{"level":"49","xp":"900","gold":"315"},"Ruby Scarab":{"level":"50","xp":"1000","gold":"315"},"Shadow Fiend":{"level":"50","xp":"1500","gold":"225"},"Forest Fiend":{"level":"53","xp":"1080","gold":"325"},"Desert Raptor":{"level":"57","xp":"1850","gold":"415"},"Rock Fiend":{"level":"60","xp":"2000","gold":"390"},"Giant Hornet":{"level":"62","xp":"2100","gold":"400"},"Luminant Slime":{"level":"65","xp":"2200","gold":"420"},"Ancient Bat":{"level":"70","xp":"2400","gold":"434"},"Ice Raptor":{"level":"73","xp":"2750","gold":"450"},"Arosite Scarab":{"level":"75","xp":"2850","gold":"600"},"Spectral Flame":{"level":"75","xp":"2700","gold":"484"},"Shadow Flame":{"level":"78","xp":"2800","gold":"490"},"Cactus Soldier":{"level":"80","xp":"2800","gold":"490"},"Phantom Flame":{"level":"80","xp":"2900","gold":"500"},"Spectral Fiend":{"level":"85","xp":"3100","gold":"520"},"Phantom Fiend":{"level":"88","xp":"3600","gold":"580"},"Ancient Cyclops":{"level":"90","xp":"4000","gold":"650"},"Anubis":{"level":"90","xp":"4000","gold":"285"},"Magnetite Scarab":{"level":"90","xp":"4250","gold":"600"},"Golemite Bat":{"level":"95","xp":"4400","gold":"675"},"Golemite Fiend":{"level":"100","xp":"5270","gold":"700"},"Poltergeist":{"level":"100","xp":"250","gold":"100"},"Anubis Elite":{"level":"110","xp":"7500","gold":"750"},"Baby Dragon":{"level":"110","xp":"5750","gold":"800"},"Brown Snake":{"level":"120","xp":"1000","gold":"300"},"Purple Snake":{"level":"135","xp":"900","gold":"400"},"Sandstone Golem":{"level":"150","xp":"11500","gold":"650"}}}')}},[[127,1,2]]]);
//# sourceMappingURL=main.f1ce6de1.chunk.js.map