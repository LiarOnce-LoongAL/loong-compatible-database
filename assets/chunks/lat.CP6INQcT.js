import{E as b,a as v,b as A,c as E}from"./theme.CcuTwKlY.js";import{d as L}from"./datas.min.BLYJ8jxN.js";import{_ as B,o as u,c as _,j as o,G as e,w as n,a,F as w,p as C,b as f,e as i,k as F}from"./framework.Df24InGn.js";const N={};function V(y,t){const s=b;return u(),_(w,null,[o("p",null,[e(s,{type:"info"},{default:n(()=>t[0]||(t[0]=[a("未知")])),_:1}),t[1]||(t[1]=o("span",null,"：尚未测试该应用程序",-1))]),o("p",null,[e(s,{type:"success"},{default:n(()=>t[2]||(t[2]=[a("兼容")])),_:1}),t[3]||(t[3]=o("span",null,"：应用程序的功能均可正常使用，尚未发现功能异常",-1))]),o("p",null,[e(s,{type:"warning"},{default:n(()=>t[4]||(t[4]=[a("有限兼容")])),_:1}),t[5]||(t[5]=o("span",null,"：应用程序可以运行，但已知部分功能不可用或存在问题",-1))]),o("p",null,[e(s,null,{default:n(()=>t[6]||(t[6]=[a("原生可用")])),_:1}),t[7]||(t[7]=o("span",null,"：应用程序已经提供原生支持 LoongArch 版本或提供了源代码，无需使用 LAT 转译",-1))]),o("p",null,[e(s,{type:"danger"},{default:n(()=>t[8]||(t[8]=[a("不兼容")])),_:1}),t[9]||(t[9]=o("span",null,"：应用程序完全无法正常使用",-1))])],64)}const G=B(N,[["render",V]]),R=[{text:"未知",value:0},{text:"兼容",value:1},{text:"有限兼容",value:2},{text:"原生可用",value:3},{text:"不兼容",value:-1}],I={__name:"lat",setup(y){const t=C(),s=()=>{t.value.clearFilter()},k=(m,l)=>l.status===m,x=L.lat;return(m,l)=>{const g=v,r=A,p=b,T=E;return u(),_(w,null,[e(g,{onClick:s},{default:n(()=>l[0]||(l[0]=[a("重置筛选")])),_:1}),e(T,{ref_key:"tableRef",ref:t,"row-key":"name",data:F(x),border:"","default-sort":{prop:"name",order:"ascending"}},{default:n(()=>[e(r,{prop:"name",label:"名称",width:"300"}),e(r,{prop:"version",label:"软件版本号",width:"140"}),e(r,{prop:"lat_version",label:"LAT 版本号",width:"200"}),e(r,{prop:"latx_or_lata",label:"LATX 或 LATA",width:"120"}),e(r,{prop:"date",label:"更新日期",width:"140"}),e(r,{prop:"status",label:"兼容状态",width:"120",filters:R,"filter-method":k,"filter-placement":"bottom-end"},{default:n(d=>[d.row.status==0?(u(),f(p,{key:0,type:"info"},{default:n(()=>l[1]||(l[1]=[a("未知")])),_:1})):i("",!0),d.row.status==1?(u(),f(p,{key:1,type:"success"},{default:n(()=>l[2]||(l[2]=[a("兼容")])),_:1})):i("",!0),d.row.status==2?(u(),f(p,{key:2,type:"warning"},{default:n(()=>l[3]||(l[3]=[a("有限兼容")])),_:1})):i("",!0),d.row.status==3?(u(),f(p,{key:3},{default:n(()=>l[4]||(l[4]=[a("原生可用")])),_:1})):i("",!0),d.row.status==-1?(u(),f(p,{key:4,type:"danger"},{default:n(()=>l[5]||(l[5]=[a("不兼容")])),_:1})):i("",!0)]),_:1},8,["filters"]),e(r,{prop:"notes",label:"备注","min-width":"300"}),e(r,{prop:"link",label:"链接",width:"60"})]),_:1},8,["data"])],64)}}};export{I as _,G as l};
