import{_ as N,C as u,c as i,o as a,j as o,G as n,t as r,F as A,p as W,w as v,a as $,k as l,B as H,e as m,b as x}from"./framework.DYkI_OET.js";import{E as G,a as K,b as R}from"./theme.DvSpC6NM.js";import{f as b,d as J}from"./locales.min.Ddx_7BK0.js";const V={};function F(p,d){const f=u("Unknown"),S=u("Compatible"),h=u("Partial"),k=u("NewWorld"),g=u("Unsupported");return a(),i(A,null,[o("p",null,[n(f),o("span",null,"："+r(p.$t("status_taginfo_hardware.unknown")),1)]),o("p",null,[n(S),o("span",null,"："+r(p.$t("status_taginfo_hardware.compatible")),1)]),o("p",null,[n(h),o("span",null,"："+r(p.$t("status_taginfo_hardware.partial")),1)]),o("p",null,[n(k),o("span",null,"："+r(p.$t("status_taginfo_hardware.new_world")),1)]),o("p",null,[n(g),o("span",null,"："+r(p.$t("status_taginfo_hardware.unsupported")),1)])],64)}const ne=N(V,[["render",F]]),X={filters_hardware_brand:[{text:"八位堂(8BitDo)",value:"8BitDo"},{text:"威刚(ADATA)",value:"ADATA"},{text:"超威半导体(AMD)",value:"AMD"},{text:"华硕(ASUS)",value:"ASUS"},{text:"艾酷(Akko)",value:"Akko"},{text:"兄弟(Brother)",value:"Brother"},{text:"七彩虹(Colorful)",value:"Colorful"},{text:"英睿达/美光(Crucial/Micron)",value:"Crucial/Micron"},{text:"江波龙(longsys/FORESEE)",value:"longsys/FORESEE"},{text:"光威(Gloway)",value:"Gloway"},{text:"华为(Huawei)",value:"Huawei"},{text:"芯动科技(InnoSilicon)",value:"InnoSilicon"},{text:"英特尔(Intel)",value:"Intel"},{text:"景嘉微(JINGJIA Micro)",value:"JINGJIA Micro"},{text:"金百达(KingBank)",value:"KingBank"},{text:"金士顿(Kingston)",value:"Kingston"},{text:"凌久微电子(Lingjiu Micro)",value:"Lingjiu Micro"},{text:"联发科(MediaTek)",value:"MediaTek"},{text:"微软(Microsoft)",value:"Microsoft"},{text:"摩尔线程(Moore Threads)",value:"Moore Threads"},{text:"裕太微电子(Motorcomm)",value:"Motorcomm"},{text:"英伟达(NVIDIA)",value:"NVIDIA"},{text:"铨兴(Quanxing)",value:"Quanxing"},{text:"瑞昱(Realtek)",value:"Realtek"},{text:"三星(Samsung)",value:"Samsung"},{text:"思得/SK海力士(Solidigm/SK Hynix)",value:"Solidigm/SK Hynix"},{text:"西安紫光国芯(UniIC)",value:"UniIC"},{text:"希捷(Seagate)",value:"Seagate"},{text:"东芝(Toshiba)",value:"Toshiba"},{text:"西部数据(Western Digital)",value:"Western Digital"},{text:"小米(Xiaomi)",value:"Xiaomi"},{text:"致态/长江存储(ZHITAI/YMTC)",value:"ZHITAI/YMTC"},{text:"中科驭数(Yusur Tech)",value:"Yusur Tech"},{text:"沐创(MUCSE)",value:"MUCSE"},{text:"北中网芯(BZWX)",value:"BZWX"},{text:"格兰菲(Glenfly)",value:"Glenfly"},{text:"爱科微(AIC/AIC Semiconductor)",value:"AIC"},{text:"速通半导体(Senscomm)",value:"Senscomm"},{text:"网迅科技(Wangxun/NetSwift)",value:"Wangxun/NetSwift"},{text:"芯瞳半导体(Sietium)",value:"Sietium"}]},Y={filters_hardware_brand:[{text:"8BitDo",value:"8BitDo"},{text:"ADATA",value:"ADATA"},{text:"AMD",value:"AMD"},{text:"ASUS",value:"ASUS"},{text:"Akko",value:"Akko"},{text:"Brother",value:"Brother"},{text:"Colorful",value:"Colorful"},{text:"Crucial/Micron",value:"Crucial/Micron"},{text:"longsys/FORESEE",value:"longsys/FORESEE"},{text:"Gloway",value:"Gloway"},{text:"Huawei",value:"Huawei"},{text:"InnoSilicon",value:"InnoSilicon"},{text:"Intel",value:"Intel"},{text:"JINGJIA Micro",value:"JINGJIA Micro"},{text:"KingBank",value:"KingBank"},{text:"Kingston",value:"Kingston"},{text:"Lingjiu Micro",value:"Lingjiu Micro"},{text:"MediaTek",value:"MediaTek"},{text:"Microsoft",value:"Microsoft"},{text:"Moore Threads",value:"Moore Threads"},{text:"Motorcomm",value:"Motorcomm"},{text:"NVIDIA",value:"NVIDIA"},{text:"Quanxing",value:"Quanxing"},{text:"Realtek",value:"Realtek"},{text:"Samsung",value:"Samsung"},{text:"Solidigm/SK Hynix",value:"Solidigm/SK Hynix"},{text:"UniIC",value:"UniIC"},{text:"Seagate",value:"Seagate"},{text:"Toshiba",value:"Toshiba"},{text:"Western Digital",value:"Western Digital"},{text:"Xiaomi",value:"Xiaomi"},{text:"ZHITAI/YMTC",value:"ZHITAI/YMTC"},{text:"Yusur Tech",value:"Yusur Tech"},{text:"MUCSE",value:"MUCSE"},{text:"BZWX",value:"BZWX"},{text:"Glenfly",value:"Glenfly"},{text:"AIC/AIC Semiconductor",value:"AIC"},{text:"Senscomm",value:"Senscomm"},{text:"Wangxun/NetSwift",value:"Wangxun/NetSwift"},{text:"Sietium",value:"Sietium"}]},Z={zh:X,en:Y},j={key:0},L={key:0},O={key:1},P={key:0},Q=["href"],z={key:1},q=["href"],oe={__name:"hardwares",setup(p){const d=document.documentElement.lang,f=W(),S=()=>{f.value.clearFilter()},h=(e,c)=>c.brand===e,k=(e,c)=>c.type===e,g=(e,c)=>c.status===e,M=(e,c)=>{const w=e.value.toUpperCase(),s=c.value.toUpperCase();let _;return w<s?_=-1:w>s?_=1:_=0,_},y=J.hardwares;return(e,c)=>{const w=G,s=K,_=u("Unknown"),C=u("Compatible"),T=u("Partial"),B=u("NewWorld"),D=u("Unsupported"),E=R;return a(),i(A,null,[n(w,{onClick:S},{default:v(()=>[$(r(e.$t("components.clear_filter")),1)]),_:1}),n(E,{ref_key:"tableRef",ref:f,"row-key":"model",data:l(y),border:"","default-sort":{prop:"brand",order:"ascending"}},{default:v(()=>[n(s,{prop:"model",label:e.$t("components.model"),width:"300"},null,8,["label"]),n(s,{prop:"brand",label:e.$t("components.brand"),"column-key":"brand",width:"150",sortable:"",filters:l(Z)[l(d)].filters_hardware_brand.sort(M),"filter-method":h},null,8,["label","filters"]),n(s,{prop:"type",label:e.$t("components.type"),width:"200",filters:l(b)[l(d)].filters_hardware_type,"filter-method":k,"filter-placement":"bottom-end"},{default:v(t=>[(a(!0),i(A,null,H(l(b)[l(d)].filters_hardware_type,(I,U)=>(a(),i("span",{key:U},[t.row.type==I.value?(a(),i("span",j,r(I.text),1)):m("",!0)]))),128))]),_:1},8,["label","filters"]),n(s,{prop:"status",label:e.$t("components.status"),width:"170",filters:l(b)[l(d)].filters_status,"filter-method":g,"filter-placement":"bottom-end"},{default:v(t=>[t.row.status==0?(a(),x(_,{key:0})):m("",!0),t.row.status==1?(a(),x(C,{key:1})):m("",!0),t.row.status==2?(a(),x(T,{key:2})):m("",!0),t.row.status==3?(a(),x(B,{key:3})):m("",!0),t.row.status==-1?(a(),x(D,{key:4})):m("",!0)]),_:1},8,["label","filters"]),n(s,{prop:"notes",label:e.$t("components.notes"),"min-width":"200"},{default:v(t=>[l(d)=="en"&&t.row.notes_en?(a(),i("span",L,r(t.row.notes_en),1)):(a(),i("span",O,r(t.row.notes),1))]),_:1},8,["label"]),n(s,{prop:"link",label:e.$t("components.link"),width:"60"},{default:v(t=>[l(d)=="en"&&t.row.link_en?(a(),i("span",P,[o("a",{href:t.row.link_en},r(e.$t("components.doc_link")),9,Q)])):t.row.link?(a(),i("span",z,[o("a",{href:t.row.link},r(e.$t("components.doc_link")),9,q)])):m("",!0)]),_:1},8,["label"])]),_:1},8,["data"])],64)}}};export{ne as H,oe as _};
