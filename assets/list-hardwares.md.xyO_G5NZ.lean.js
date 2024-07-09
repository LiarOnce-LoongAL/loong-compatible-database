import{E as w,a as N,b as S,c as $}from"./chunks/theme.CeBEpMpy.js";import{d as v,f as y,a as C}from"./chunks/filters.CyzCBuTF.js";import{aw as F,p as s,q as u,t as a,U as e,O as t,F as m,S as l,a as V,u as D,a7 as O,T as P,R as _,M as c}from"./chunks/framework.CHtiprlN.js";const R={},H=a("span",null,"：该硬件兼容性未知，需个人自行测试",-1),J=a("span",null,"：该硬件可以兼容龙架构平台，且兼容旧世界和新世界系统",-1),j=a("span",null,"：该硬件可以在功能不完整的情况下兼容龙架构平台，且兼容旧世界和新世界系统",-1),q=a("span",null,"：该硬件可以兼容龙架构平台，但仅在新世界系统可用",-1),I=a("span",null,"：该硬件不兼容龙架构平台，且不兼容任何世界系统",-1);function L(h,i){const r=w;return s(),u(m,null,[a("p",null,[e(r,{type:"info"},{default:t(()=>[l("未知")]),_:1}),H]),a("p",null,[e(r,{type:"success"},{default:t(()=>[l("兼容")]),_:1}),J]),a("p",null,[e(r,{type:"warning"},{default:t(()=>[l("有限兼容")]),_:1}),j]),a("p",null,[e(r,null,{default:t(()=>[l("新世界可用")]),_:1}),q]),a("p",null,[e(r,{type:"danger"},{default:t(()=>[l("不兼容")]),_:1}),I])],64)}const M=F(R,[["render",L]]),U={key:0},z={__name:"hardwares",setup(h){const i=V(),r=()=>{i.value.clearFilter()},k=(p,f)=>f.type===p,g=(p,f)=>f.status===p,x=v.hardwares;return(p,f)=>{const T=N,o=$,d=w,E=S;return s(),u(m,null,[e(T,{onClick:r},{default:t(()=>[l("重置筛选")]),_:1}),e(E,{ref_key:"tableRef",ref:i,"row-key":"model",data:D(x),border:"","default-sort":{prop:"brand",order:"ascending"}},{default:t(()=>[e(o,{prop:"model",label:"型号"}),e(o,{prop:"brand",label:"品牌","column-key":"brand",width:"120",sortable:""}),e(o,{prop:"type",label:"类型",width:"180",filters:y,"filter-method":k,"filter-placement":"bottom-end"},{default:t(n=>[(s(!0),u(m,null,O(y,(b,B)=>(s(),u("span",{key:B},[n.row.type==b.value?(s(),u("span",U,P(b.text),1)):_("",!0)]))),128))]),_:1},8,["filters"]),e(o,{prop:"status",label:"兼容状态",width:"100",filters:C,"filter-method":g,"filter-placement":"bottom-end"},{default:t(n=>[n.row.status==0?(s(),c(d,{key:0,type:"info"},{default:t(()=>[l("未知")]),_:1})):_("",!0),n.row.status==1?(s(),c(d,{key:1,type:"success"},{default:t(()=>[l("兼容")]),_:1})):_("",!0),n.row.status==2?(s(),c(d,{key:2,type:"warning"},{default:t(()=>[l("有限兼容")]),_:1})):_("",!0),n.row.status==3?(s(),c(d,{key:3},{default:t(()=>[l("新世界可用")]),_:1})):_("",!0),n.row.status==-1?(s(),c(d,{key:4,type:"danger"},{default:t(()=>[l("不兼容")]),_:1})):_("",!0)]),_:1},8,["filters"]),e(o,{prop:"notes",label:"备注"}),e(o,{prop:"link",label:"链接",width:"100"})]),_:1},8,["data"])],64)}}},A=a("h1",{id:"硬件兼容性",tabindex:"-1"},[l("硬件兼容性 "),a("a",{class:"header-anchor",href:"#硬件兼容性","aria-label":'Permalink to "硬件兼容性"'},"​")],-1),G=a("p",null,"此处为社区共同测试后确认的硬件，可用于装机参考。",-1),Y=JSON.parse('{"title":"硬件兼容性","description":"","frontmatter":{"aside":false,"outline":false},"headers":[],"relativePath":"list-hardwares.md","filePath":"list-hardwares.md"}'),K={name:"list-hardwares.md"},Z=Object.assign(K,{setup(h){return(i,r)=>(s(),u("div",null,[A,G,e(M),e(z)]))}});export{Y as __pageData,Z as default};
