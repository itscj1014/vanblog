import{u as M,e as se,f as te,g as U,h as ae,P as re,t as le,i as ie,j as q,k as H,l as oe,w as Y,m as t,n as ue,R as T,p as ne,q as ce,v as ve,C as pe,x as Ee,y as he,z as me,A as de,B as ye,D as S,E as Be,F as ge,G as Ae,H as _,I as $,J as be}from"./app-BUukCv0U.js";const fe=["/","/distribute-system/","/distribute-system/distribute-id.html","/distribute-system/distribute-lock.html","/java-core/","/ssm/","/tools/","/tools/git.html","/distribute-system/distribute-basic/","/distribute-system/distribute-basic/cap-base.html","/distribute-system/distribute-basic/raft.html","/java-core/current/","/java-core/current/lock.html","/java-core/current/thread-model.html","/java-core/current/thread-pool.html","/java-core/jvm/","/java-core/jvm/classloader.html","/java-core/jvm/jit.html","/java-core/jvm/jvm-1.html","/ssm/springboot/","/ssm/springboot/SpringBoot%20Web%20%E5%BC%80%E5%8F%91.html","/ssm/springboot/SpringBoot%20%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6.html","/ssm/springboot/SpringBoot%20%E5%9F%BA%E7%A1%80%E7%89%B9%E6%80%A7.html","/ssm/springboot/SpringBoot%20%E6%95%B4%E5%90%88%20MyBatis.html","/ssm/springboot/SpringBoot%20%E6%97%A5%E5%BF%97%E6%95%B4%E5%90%88.html","/ssm/springboot/SpringBoot%20%E6%98%AF%E5%A6%82%E4%BD%95%E6%95%B4%E5%90%88%20Web%20MVC%E7%9A%84.html","/ssm/springboot/SpringBoot%20%E6%9D%A1%E4%BB%B6%E6%B3%A8%E8%A7%A3.html","/ssm/springboot/SpringBoot%20%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","/ssm/springboot/SpringBoot%20%E7%BB%9F%E4%B8%80%E7%BB%93%E6%9E%9C_%E5%BC%82%E5%B8%B8_%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86TODO.html","/ssm/springboot/SpringBoot%20%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7%E4%B8%8E%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E6%8C%87%E5%8D%97.html","/ssm/springboot/%E5%85%B3%E4%BA%8E%20SpringBoot%20%E5%8F%AF%E6%89%A7%E8%A1%8C%20jar%E7%9A%84%E6%89%93%E5%8C%85%E9%97%AE%E9%A2%98.html","/ssm/springboot/%E5%B1%9E%E6%80%A7%E7%BB%91%E5%AE%9A-@ConfigurationProperties.html","/ssm/springboot/%E5%B1%9E%E6%80%A7%E7%BB%91%E5%AE%9A-@EnableConfigurationProperties%20.html","/ssm/springboot/%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AETODO.html","/404.html"],Ce="SEARCH_PRO_QUERY_HISTORY",y=M(Ce,[]),He=()=>{const{queryHistoryCount:a}=S,r=a>0;return{enabled:r,queryHistory:y,addQueryHistory:l=>{r&&(y.value=Array.from(new Set([l,...y.value.slice(0,a-1)])))},removeQueryHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},x=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),Se="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=S,B=M(Se,[]),Re=()=>{const a=I>0;return{enabled:a,resultHistory:B,addResultHistory:r=>{if(a){const l={link:x(r),display:r.display};"header"in r&&(l.header=r.header),B.value=[l,...B.value.slice(0,I-1)]}},removeResultHistory:r=>{B.value=[...B.value.slice(0,r),...B.value.slice(r+1)]}}},je=a=>{const r=pe(),l=U(),R=Ee(),o=q(0),b=H(()=>o.value>0),h=he([]);return me(()=>{const{search:m,terminate:j}=de(),g=ye(c=>{const A=c.join(" "),{searchFilter:k=E=>E,splitWord:D,suggestionsFilter:L,...d}=r.value;A?(o.value+=1,m(c.join(" "),l.value,d).then(E=>k(E,A,l.value,R.value)).then(E=>{o.value-=1,h.value=E}).catch(E=>{console.warn(E),o.value-=1,o.value||(h.value=[])})):h.value=[]},S.searchDelay-S.suggestDelay);Y([a,l],([c])=>g(c),{immediate:!0}),Be(()=>{j()})}),{isSearching:b,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:r}){const l=te(),R=U(),o=ae(re),{enabled:b,addQueryHistory:h,queryHistory:m,removeQueryHistory:j}=He(),{enabled:g,resultHistory:c,addResultHistory:A,removeResultHistory:k}=Re(),D=b||g,L=le(a,"queries"),{results:d,isSearching:E}=je(L),i=ie({isQuery:!0,index:0}),v=q(0),p=q(0),O=H(()=>D&&(m.value.length>0||c.value.length>0)),w=H(()=>d.value.length>0),Q=H(()=>d.value[v.value]||null),V=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?c.value.length-1:m.value.length-1):i.index=s-1},W=()=>{const{isQuery:e,index:s}=i;s===(e?m.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},z=()=>{v.value=v.value>0?v.value-1:d.value.length-1,p.value=Q.value.contents.length-1},G=()=>{v.value=v.value<d.value.length-1?v.value+1:0,p.value=0},J=()=>{p.value<Q.value.contents.length-1?p.value+=1:G()},K=()=>{p.value>0?p.value-=1:z()},F=e=>e.map(s=>be(s)?s:t(s[0],s[1])),N=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[u,C=""]=Ae(s)?s[R.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",F([u,...n,C])))}return e.display.map(s=>t("div",F(s)))},f=()=>{v.value=0,p.value=0,r("updateQuery",""),r("close")},X=()=>b?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.queryHistory),m.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{r("updateQuery",e)}},[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:u=>{u.preventDefault(),u.stopPropagation(),j(s)}})]))])):null,Z=()=>g?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{f()}},()=>[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>F(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:u=>{u.preventDefault(),u.stopPropagation(),k(s)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(w.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const s=Q.value.contents[p.value];h(a.queries.join(" ")),A(s),l.push(x(s)),f()}}else if(g){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(r("updateQuery",m.value[s]),e.preventDefault()):(l.push(c.value[s].link),f())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!w.value:!O.value}],id:"search-pro-results"},a.queries.length?E.value?t(ue,{hint:o.value.searching}):w.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:s},u)=>{const C=v.value===u;return t("li",{class:["search-pro-result-list-item",{active:C}]},[t("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),s.map((n,ee)=>{const P=C&&p.value===ee;return t(T,{to:x(n),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{h(a.queries.join(" ")),A(n),f()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",N(n))])])})])})):o.value.emptyResult:D?O.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{De as default};
