(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(96)},41:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),i=a.n(c),o=(a(41),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),p=a(8),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"profile-image"}),r.a.createElement("div",{className:"name-position-container"},r.a.createElement("div",{className:"name"},"Katherine Curtis"),r.a.createElement("div",{className:"position"},"Software Development Engineer")))}}]),t}(n.Component),b=a(13),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"link-item"},r.a.createElement("a",{href:this.state.href},r.a.createElement(p.c,{icon:this.state.icon,size:"lg"})))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"link-container"},r.a.createElement("div",{className:"links"},r.a.createElement(h,{icon:"linkedin",href:"https://www.linkedin.com/in/katherine-curtis-94056010b/"}),r.a.createElement(h,{icon:"envelope",href:"mailto:kcurtis26518@gmail.com"}),r.a.createElement(h,{icon:"github",href:"https://github.com/kgcurtis/"})))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bio"},"This is a bio about me! This section currently needs work, I still need to add a bio...")}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-content-container"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(E,null)))}}]),t}(n.Component),O=a(20),g=(a(92),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-item"},r.a.createElement(p.d,null,r.a.createElement(p.a,{sm:"3"},r.a.createElement("div",{className:"circle"}),r.a.createElement("h6",null,this.state.item.time)),r.a.createElement(p.a,{sm:"9"},r.a.createElement("h6",null,r.a.createElement("b",null,this.state.item.title),", ",this.state.item.position),r.a.createElement("p",null,r.a.createElement("span",{className:"text-muted ml-4"},this.state.item.description)))))}}]),t}(n.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h5",{className:"pb-2"},"Education and Work Experience"),r.a.createElement(g,{item:{title:"Microsoft",position:"Software Development Engineer",description:"Coming Soon...",time:"Summer 2019"}}),r.a.createElement(g,{item:{title:"University of Texas at Austin",position:"B.S. Computer Science",description:"Certificates: Chinese, Business",time:"Spring 2019"}}),r.a.createElement(g,{item:{title:"Salesforce",position:"SDE Intern",description:"Designed and implemented file metrics component for core Salesforce app. Logged and aggregated data to HBase triggered by UI-tier user actions. Developed front-end component to display file metrics. Wrote unit and end-to-end tests for front-end and back-end. Used: Aura (Salesforce UI framework), CSS, JavaScript, Java",time:"Summer 2018"}}),r.a.createElement(g,{item:{title:"Salesforce",position:"SDE Intern",description:"Created a component for core Salesforce app. Component recommended files relevant to the user; SOSL query matched metadata/prioritized results. Front-end component built for scalability and reusability by conforming to Lightning Design System. Wrote unit and end-to-end tests for front-end and back-end. Used: Aura (Salesforce UI framework), CSS, JavaScript, Java",time:"Summer 2017"}}),r.a.createElement(g,{item:{title:"Amazon",position:"SDE Intern",description:"Designed and developed GUI for Virtual Microphone Array design. Built front-end and setup back-end infrastructure to process serialized data from web app. Server build consisted of Matlab and Python scripts, which simulated microphone array designs. Used: Python, HTML/CSS, JavaScript, Matlab, C++, Git, Bash ",time:"Summer 2016"}}))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.items.map(function(e){return r.a.createElement(p.a,{sm:"2",md:"2",className:"text-center"},r.a.createElement("img",{alt:"logo",src:e.logo}),r.a.createElement("br",null),e.name)});return r.a.createElement("div",{className:"skills-item mb-4"},r.a.createElement("h5",null,this.state.title),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement(p.d,null," ",e," "))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-4"},r.a.createElement(y,{title:"Languages",items:[{name:"Java",logo:"java.png"},{name:"Python",logo:"python.png"},{name:"C++",logo:"cpp.png"},{name:"JavaScript",logo:"javascript.png"}]}),r.a.createElement(y,{title:"Libraries & Frameworks",items:[{name:"React",logo:"react.png"},{name:"Mocha",logo:"mocha.svg"},{name:"Stanford coreNLP",logo:"corenlp.png"}]}),r.a.createElement(y,{title:"Tools",items:[{name:"Docker",logo:"docker.png"},{name:"AWS",logo:"aws.png"},{name:"Firebase",logo:"firebase.png"},{name:"Apache Solr",logo:"apache_solr.png"},{name:"Travis CI",logo:"travis.png"}]}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=Object(b.a)({},e),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="https://github.com/kgcurtis/"+this.state.repo;return r.a.createElement(p.a,{sm:"12",md:"6",lg:"6",xl:"4"},r.a.createElement("a",{href:e},r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-item-image"},r.a.createElement("img",{alt:"project",src:this.state.img})),r.a.createElement("div",{className:"project-item-header"},this.state.title))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.b,null,r.a.createElement(p.d,{className:"project-items-container"},r.a.createElement(S,{title:"Information Retrieval",img:"solr.png",repo:"nlp_ir"}),r.a.createElement(S,{title:"Information Extraction",img:"informationextraction.png",repo:"info_extraction"}),r.a.createElement(S,{title:"React Auth App",img:"auth_app.png",repo:"basic_auth_app"}),r.a.createElement(S,{title:"React Resume",img:"resume.png",repo:"react_resume"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={tabs:[{name:"About",component:r.a.createElement(v,null)},{name:"Skills",component:r.a.createElement(k,null)},{name:"Projects",component:r.a.createElement(C,null)}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.tabs.map(function(e){return r.a.createElement(O.a,null,e.name)}),t=this.state.tabs.map(function(e){return r.a.createElement(O.c,null,e.component)});return r.a.createElement("div",{className:"main"},r.a.createElement(O.d,null,r.a.createElement(O.b,null," ",e," "),t))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.b,null,r.a.createElement(p.d,null,r.a.createElement(p.a,{md:"12",lg:"5",xl:"4"},r.a.createElement(j,null)),r.a.createElement(p.a,{md:"12",lg:"7",xl:"8"},r.a.createElement(N,null))))}}]),t}(n.Component),I=(a(93),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94),a(95);i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.d2aee9ef.chunk.js.map