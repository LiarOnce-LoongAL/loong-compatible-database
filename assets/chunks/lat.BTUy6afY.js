import{E as f,a as T,b as x,c as A}from"./theme.B2piqqLU.js";import{c as E,d as L}from"./filters.Dw0Uu0Mp.js";import{aw as B,p as s,q as m,t as l,U as t,O as e,S as a,F as b,a as C,M as u,R as c,u as F}from"./framework.CdlkUDiT.js";const N={},V=l("span",null,"：尚未测试该应用程序",-1),v=l("span",null,"：应用程序的功能均可正常使用，尚未发现功能异常",-1),R=l("span",null,"：应用程序可以运行，但已知部分功能不可用或存在问题",-1),S=l("span",null,"：应用程序已经提供原生支持 LoongArch 版本或提供了源代码，无需使用 LAT 转译",-1),q=l("span",null,"：应用程序完全无法正常使用",-1);function D(h,p){const o=f;return s(),m(b,null,[l("p",null,[t(o,{type:"info"},{default:e(()=>[a("未知")]),_:1}),V]),l("p",null,[t(o,{type:"success"},{default:e(()=>[a("兼容")]),_:1}),v]),l("p",null,[t(o,{type:"warning"},{default:e(()=>[a("有限兼容")]),_:1}),R]),l("p",null,[t(o,null,{default:e(()=>[a("原生可用")]),_:1}),S]),l("p",null,[t(o,{type:"danger"},{default:e(()=>[a("不兼容")]),_:1}),q])],64)}const O=B(N,[["render",D]]),U={__name:"lat",setup(h){const p=C(),o=()=>{p.value.clearFilter()},w=(d,i)=>i.status===d,y=L.lat;return(d,i)=>{const k=T,n=x,r=f,g=A;return s(),m(b,null,[t(k,{onClick:o},{default:e(()=>[a("重置筛选")]),_:1}),t(g,{ref_key:"tableRef",ref:p,"row-key":"name",data:F(y),border:"","default-sort":{prop:"name",order:"ascending"}},{default:e(()=>[t(n,{prop:"name",label:"名称",width:"300"}),t(n,{prop:"version",label:"软件版本号",width:"140"}),t(n,{prop:"lat_version",label:"LAT 版本号",width:"200"}),t(n,{prop:"latx_or_lata",label:"LATX 或 LATA",width:"120"}),t(n,{prop:"date",label:"更新日期",width:"140"}),t(n,{prop:"status",label:"兼容状态",width:"120",filters:E,"filter-method":w,"filter-placement":"bottom-end"},{default:e(_=>[_.row.status==0?(s(),u(r,{key:0,type:"info"},{default:e(()=>[a("未知")]),_:1})):c("",!0),_.row.status==1?(s(),u(r,{key:1,type:"success"},{default:e(()=>[a("兼容")]),_:1})):c("",!0),_.row.status==2?(s(),u(r,{key:2,type:"warning"},{default:e(()=>[a("有限兼容")]),_:1})):c("",!0),_.row.status==3?(s(),u(r,{key:3},{default:e(()=>[a("原生可用")]),_:1})):c("",!0),_.row.status==-1?(s(),u(r,{key:4,type:"danger"},{default:e(()=>[a("不兼容")]),_:1})):c("",!0)]),_:1},8,["filters"]),t(n,{prop:"notes",label:"备注","min-width":"300"}),t(n,{prop:"link",label:"链接",width:"60"})]),_:1},8,["data"])],64)}}};export{U as _,O as l};
