import{E as f,a as g,b as T,c as v}from"./theme.BiBe9eUl.js";import{d as A}from"./datas.min.CQAhLvsN.js";import{aw as E,p as s,q as m,t as l,U as t,O as e,S as a,F as b,a as L,M as _,R as c,u as B}from"./framework.ByRx3r4Z.js";const C={},F=l("span",null,"：尚未测试该应用程序",-1),N=l("span",null,"：应用程序的功能均可正常使用，尚未发现功能异常",-1),V=l("span",null,"：应用程序可以运行，但已知部分功能不可用或存在问题",-1),R=l("span",null,"：应用程序已经提供原生支持 LoongArch 版本或提供了源代码，无需使用 LAT 转译",-1),S=l("span",null,"：应用程序完全无法正常使用",-1);function q(h,p){const o=f;return s(),m(b,null,[l("p",null,[t(o,{type:"info"},{default:e(()=>[a("未知")]),_:1}),F]),l("p",null,[t(o,{type:"success"},{default:e(()=>[a("兼容")]),_:1}),N]),l("p",null,[t(o,{type:"warning"},{default:e(()=>[a("有限兼容")]),_:1}),V]),l("p",null,[t(o,null,{default:e(()=>[a("原生可用")]),_:1}),R]),l("p",null,[t(o,{type:"danger"},{default:e(()=>[a("不兼容")]),_:1}),S])],64)}const O=E(C,[["render",q]]),D=[{text:"未知",value:0},{text:"兼容",value:1},{text:"有限兼容",value:2},{text:"原生可用",value:3},{text:"不兼容",value:-1}],U={__name:"lat",setup(h){const p=L(),o=()=>{p.value.clearFilter()},w=(d,i)=>i.status===d,y=A.lat;return(d,i)=>{const k=g,n=T,r=f,x=v;return s(),m(b,null,[t(k,{onClick:o},{default:e(()=>[a("重置筛选")]),_:1}),t(x,{ref_key:"tableRef",ref:p,"row-key":"name",data:B(y),border:"","default-sort":{prop:"name",order:"ascending"}},{default:e(()=>[t(n,{prop:"name",label:"名称",width:"300"}),t(n,{prop:"version",label:"软件版本号",width:"140"}),t(n,{prop:"lat_version",label:"LAT 版本号",width:"200"}),t(n,{prop:"latx_or_lata",label:"LATX 或 LATA",width:"120"}),t(n,{prop:"date",label:"更新日期",width:"140"}),t(n,{prop:"status",label:"兼容状态",width:"120",filters:D,"filter-method":w,"filter-placement":"bottom-end"},{default:e(u=>[u.row.status==0?(s(),_(r,{key:0,type:"info"},{default:e(()=>[a("未知")]),_:1})):c("",!0),u.row.status==1?(s(),_(r,{key:1,type:"success"},{default:e(()=>[a("兼容")]),_:1})):c("",!0),u.row.status==2?(s(),_(r,{key:2,type:"warning"},{default:e(()=>[a("有限兼容")]),_:1})):c("",!0),u.row.status==3?(s(),_(r,{key:3},{default:e(()=>[a("原生可用")]),_:1})):c("",!0),u.row.status==-1?(s(),_(r,{key:4,type:"danger"},{default:e(()=>[a("不兼容")]),_:1})):c("",!0)]),_:1},8,["filters"]),t(n,{prop:"notes",label:"备注","min-width":"300"}),t(n,{prop:"link",label:"链接",width:"60"})]),_:1},8,["data"])],64)}}};export{U as _,O as l};