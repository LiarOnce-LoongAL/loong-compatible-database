import{E as m,a as L,b as x,c as B}from"./chunks/theme.BckMoinC.js";import{d as E,a as v}from"./chunks/filters.D5wt-cu2.js";import{aw as N,p as n,q as d,t as a,U as t,O as e,F as h,S as l,a as T,u as C,M as _,R as u}from"./chunks/framework.CHtiprlN.js";const F={},S=a("span",null,"：尚未测试该应用程序",-1),V=a("span",null,"：应用程序的功能均可正常使用，尚未发现功能异常",-1),D=a("span",null,"：应用程序可以运行，但已知部分功能不可用或存在问题",-1),I=a("span",null,"：应用程序已经提供新世界 ABI 版本或提供了源代码，无需使用旧世界上的软件包",-1),O=a("span",null,"：应用程序完全无法正常使用",-1);function P(p,c){const o=m;return n(),d(h,null,[a("p",null,[t(o,{type:"info"},{default:e(()=>[l("未知")]),_:1}),S]),a("p",null,[t(o,{type:"success"},{default:e(()=>[l("兼容")]),_:1}),V]),a("p",null,[t(o,{type:"warning"},{default:e(()=>[l("有限兼容")]),_:1}),D]),a("p",null,[t(o,null,{default:e(()=>[l("新世界可用")]),_:1}),I]),a("p",null,[t(o,{type:"danger"},{default:e(()=>[l("不兼容")]),_:1}),O])],64)}const R=N(F,[["render",P]]),$={__name:"liblol",setup(p){const c=T(),o=()=>{c.value.clearFilter()},w=(f,b)=>b.status===f,y=E.liblol;return(f,b)=>{const k=L,s=B,r=m,g=x;return n(),d(h,null,[t(k,{onClick:o},{default:e(()=>[l("重置筛选")]),_:1}),t(g,{ref_key:"tableRef",ref:c,"row-key":"model",data:C(y),border:"","default-sort":{prop:"id",order:"ascending"}},{default:e(()=>[t(s,{prop:"id",label:"ID",width:"70"}),t(s,{prop:"name",label:"名称",width:"210"}),t(s,{prop:"version",label:"软件版本号",width:"180"}),t(s,{prop:"liblol_version",label:"LibLoL 版本号",width:"80"}),t(s,{prop:"date",label:"更新日期",width:"180"}),t(s,{prop:"status",label:"兼容状态",width:"110",filters:v,"filter-method":w,"filter-placement":"bottom-end"},{default:e(i=>[i.row.status==0?(n(),_(r,{key:0,type:"info"},{default:e(()=>[l("未知")]),_:1})):u("",!0),i.row.status==1?(n(),_(r,{key:1,type:"success"},{default:e(()=>[l("兼容")]),_:1})):u("",!0),i.row.status==2?(n(),_(r,{key:2,type:"warning"},{default:e(()=>[l("有限兼容")]),_:1})):u("",!0),i.row.status==3?(n(),_(r,{key:3},{default:e(()=>[l("新世界可用")]),_:1})):u("",!0),i.row.status==-1?(n(),_(r,{key:4,type:"danger"},{default:e(()=>[l("不兼容")]),_:1})):u("",!0)]),_:1},8,["filters"]),t(s,{prop:"notes",label:"备注","min-width":"200"}),t(s,{prop:"link",label:"链接",width:"60"})]),_:1},8,["data"])],64)}}},J=a("h1",{id:"liblol-兼容性",tabindex:"-1"},[l("LibLoL 兼容性 "),a("a",{class:"header-anchor",href:"#liblol-兼容性","aria-label":'Permalink to "LibLoL 兼容性"'},"​")],-1),U=JSON.parse('{"title":"LibLoL 兼容性","description":"","frontmatter":{"aside":false,"outline":false},"headers":[],"relativePath":"list-liblol.md","filePath":"list-liblol.md"}'),j={name:"list-liblol.md"},z=Object.assign(j,{setup(p){return(c,o)=>(n(),d("div",null,[J,t(R),t($)]))}});export{U as __pageData,z as default};
