import{j as e}from"./index-avgv2gxF.js";import{g as c}from"./utils-DRiRRls7.js";const a=[{title:"HTML",imageSrc:"skills/html.svg",level:"Advanced"},{title:"CSS",imageSrc:"skills/css.svg",level:"Advanced"},{title:"JS",imageSrc:"skills/js.svg",level:"Intermediate"},{title:"React",imageSrc:"skills/react.svg",level:"Advanced"},{title:"BootStrap",imageSrc:"skills/bootstrap.svg",level:"Advanced"},{title:"Tailwind",imageSrc:"skills/tailwind.svg",level:"Advanced"},{title:"Saas",imageSrc:"skills/saas.svg",level:"Intermediate"},{title:"BEM",imageSrc:"skills/bem.svg",level:"Advanced"},{title:"Git/GitHub",imageSrc:"skills/GitHub.svg",level:"Advanced"},{title:"WEB ACCESSIBILITY",imageSrc:"skills/webaccess.svg",level:"Intermediate"},{title:"SEO",imageSrc:"skills/seo.svg",level:"Intermediate"},{title:"Vite",imageSrc:"skills/vite.svg",level:"Advanced"},{title:"Webpack",imageSrc:"skills/webpack.svg",level:"Advanced"},{title:"Netlify",imageSrc:"skills/netlify.svg",level:"Advanced"},{title:"Firebase",imageSrc:"skills/firebase.svg",level:"Advanced"},{title:"Vercel",imageSrc:"skills/vercel.svg",level:"Advanced"},{title:"WORDPRESS",imageSrc:"skills/wordpress.svg",level:"Intermediate"},{title:"Excel",imageSrc:"skills/excel.svg",level:"beginner"}],n="_container_14cpy_3",r="_title_14cpy_15",v="_content_14cpy_29",d="_skills_14cpy_41",m="_skill_14cpy_41",o="_skillImageContainer_14cpy_65",g="_history_14cpy_101",_="_historyItem_14cpy_113",k="_historyItemDetails_14cpy_139",S="_intermediate_14cpy_181",p="_advanced_14cpy_189",y="_level_14cpy_1",I="_beginner_14cpy_195",l={container:n,title:r,content:v,skills:d,skill:m,skillImageContainer:o,history:g,historyItem:_,historyItemDetails:k,intermediate:S,advanced:p,level:y,beginner:I},b=()=>e.jsxs("section",{id:"experience",className:l.container,children:[e.jsx("h2",{className:l.title,children:"Experience"}),e.jsx("div",{className:l.content,children:e.jsx("div",{className:l.skills,children:a.map((t,s)=>{const i=t.level==="Advanced"?"advanced":t.level==="Intermediate"?"intermediate":"beginner";return e.jsxs("div",{className:l.skill,children:[e.jsx("div",{className:`${l.skillImageContainer} ${l[i]}`,children:e.jsx("img",{src:c(t.imageSrc),alt:t.title})}),e.jsx("p",{children:t.title})]},s)})})})]});export{b as default};
