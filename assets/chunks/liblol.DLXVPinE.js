import{_ as T,C as d,c as C,o as s,j as l,G as t,F as x,a2 as v,p as U,P as F,w as a,a as r,k as g,b as i,e as m}from"./framework.CtegoOgk.js";import{u as V,E as L,a as P,c as S,b as D}from"./theme.D65t5ioW.js";import{f as R,d as W}from"./locales.min.DwPocNv9.js";const $={};function j(E,n){const _=d("Unknown"),b=d("Compatible"),f=d("Partial"),w=d("NewWorld"),c=d("Unsupported");return s(),C(x,null,[l("p",null,[t(_),n[0]||(n[0]=l("span",null,"：尚未测试该应用程序",-1))]),l("p",null,[t(b),n[1]||(n[1]=l("span",null,"：应用程序的功能均可正常使用，尚未发现功能异常",-1))]),l("p",null,[t(f),n[2]||(n[2]=l("span",null,"：应用程序可以运行，但已知部分功能不可用或存在问题",-1))]),l("p",null,[t(w),n[3]||(n[3]=l("span",null,"：应用程序已经提供新世界 ABI 版本或提供了源代码，无需使用旧世界上的软件包",-1))]),l("p",null,[t(c),n[4]||(n[4]=l("span",null,"：应用程序完全无法正常使用",-1))])],64)}const J=T($,[["render",j]]),q={__name:"liblol",setup(E){const{proxy:n}=v(),{locale:_}=V(),b=document.documentElement.lang,f=U(),w=()=>{f.value.clearFilter()},c=(k,e)=>e.status===k,I=W.liblol;return F(()=>{typeof window<"u"&&(localStorage.setItem("lang",document.documentElement.lang),_.value=localStorage.getItem("lang"),n.$forceUpdate())}),(k,e)=>{const B=L,o=P,u=S,N=D;return s(),C(x,null,[t(B,{onClick:w},{default:a(()=>e[0]||(e[0]=[r("重置筛选")])),_:1}),t(N,{ref_key:"tableRef",ref:f,"row-key":"name",data:g(I),border:"","default-sort":{prop:"id",order:"ascending"}},{default:a(()=>{var y;return[t(o,{prop:"id",label:"ID",width:"70"}),t(o,{prop:"name",label:"名称",width:"210"}),t(o,{prop:"version",label:"软件版本号",width:"180"}),t(o,{prop:"liblol_version",label:"LibLoL 版本号",width:"80"}),t(o,{prop:"date",label:"更新日期",width:"180"}),t(o,{prop:"status",label:"兼容状态",width:"110",filters:((y=g(R)[g(b)])==null?void 0:y.filters_status)||"zh","filter-method":c,"filter-placement":"bottom-end"},{default:a(p=>[p.row.status==0?(s(),i(u,{key:0,type:"info"},{default:a(()=>e[1]||(e[1]=[r("未知")])),_:1})):m("",!0),p.row.status==1?(s(),i(u,{key:1,type:"success"},{default:a(()=>e[2]||(e[2]=[r("兼容")])),_:1})):m("",!0),p.row.status==2?(s(),i(u,{key:2,type:"warning"},{default:a(()=>e[3]||(e[3]=[r("有限兼容")])),_:1})):m("",!0),p.row.status==3?(s(),i(u,{key:3},{default:a(()=>e[4]||(e[4]=[r("新世界可用")])),_:1})):m("",!0),p.row.status==-1?(s(),i(u,{key:4,type:"danger"},{default:a(()=>e[5]||(e[5]=[r("不兼容")])),_:1})):m("",!0)]),_:1},8,["filters"]),t(o,{prop:"notes",label:"备注","min-width":"200"}),t(o,{prop:"link",label:"链接",width:"60"})]}),_:1},8,["data"])],64)}}};export{q as _,J as l};
