import{j as e}from"./index-avgv2gxF.js";import{g as m}from"./utils-DRiRRls7.js";const h=[{title:"IPL Website",imageSrc:"projects/IPL.png",description:"This website was  developed  as part of my internship at ShadowFox using FrontEnd Concepts.",skills:["HTML","CSS","JS","REACT","BOOTSTRAP"],demo:"https://iplfanclub.netlify.app/",source:"https://github.com/Mugammadhu/Shadowfox_ipl"},{title:"Social Media App",imageSrc:"projects/social.png",description:"This is a project made to learn the concepts of axios and React.",skills:["HTML","CSS","JS","REACT"],demo:"https://social-media-app122.netlify.app/",source:"https://github.com/Mugammadhu/social"},{title:"Weather App",imageSrc:"projects/weather.png",description:"This is a created using HTML,CSS,REACT.JS to get current weather.",skills:["React","HTML","CSS","JS"],demo:"https://weather-checker-app1.netlify.app/",source:"https://github.com/Mugammadhu/weather"},{title:"Currency Converter",imageSrc:"projects/currency.png",description:"This is a project is used to convert currency from one to another.This project helps to use the rest Api in react",skills:["React","JSX","CSS"],demo:"https://currency-coverter212.netlify.app/",source:"https://github.com/Mugammadhu/CurrencyConverter"}],d="_container_1ignv_3",g="_image_1ignv_25",_="_title_1ignv_41",u="_description_1ignv_49",j="_skills_1ignv_59",k="_skill_1ignv_59",S="_links_1ignv_91",x="_link_1ignv_91",s={container:d,image:g,title:_,description:u,skills:j,skill:k,links:S,link:x},v=({project:{imageSrc:i,title:t,description:n,demo:r,source:a,skills:o}})=>e.jsxs("div",{className:s.container,children:[e.jsx("img",{src:m(i),alt:`Image of ${t}`,className:s.image}),e.jsx("h3",{className:s.title,children:t}),e.jsx("p",{className:s.description,children:n}),e.jsx("ul",{className:s.skills,children:o.map((l,p)=>e.jsx("li",{className:s.skill,children:l},p))}),e.jsxs("div",{className:s.links,children:[e.jsx("a",{href:r,className:s.link,target:"_blank",children:"Demo"}),e.jsx("a",{href:a,className:s.link,target:"_blank",children:"Source"})]})]}),f="_container_1ppx8_3",C="_title_1ppx8_15",T="_projects_1ppx8_27",c={container:f,title:C,projects:T},b=()=>e.jsxs("section",{id:"projects",className:c.container,children:[e.jsx("h2",{className:c.title,children:"Projects"}),e.jsx("div",{className:c.projects,children:h.map((i,t)=>e.jsx(v,{project:i},t))})]});export{b as default};