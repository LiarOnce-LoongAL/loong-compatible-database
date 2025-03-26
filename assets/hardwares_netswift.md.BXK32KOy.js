import{_ as t,c as n,o as s,b0 as e}from"./chunks/framework.DYkI_OET.js";const b=JSON.parse('{"title":"网迅科技 (Wangxun/NetSwift) 有线网卡","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"hardwares/netswift.md","filePath":"hardwares/netswift.md"}'),p={name:"hardwares/netswift.md"};function d(i,a,l,r,o,c){return s(),n("div",null,a[0]||(a[0]=[e(`<h1 id="网迅科技-wangxun-netswift-有线网卡" tabindex="-1">网迅科技 (Wangxun/NetSwift) 有线网卡 <a class="header-anchor" href="#网迅科技-wangxun-netswift-有线网卡" aria-label="Permalink to &quot;网迅科技 (Wangxun/NetSwift) 有线网卡&quot;">​</a></h1><h2 id="linux-6-1-以上" tabindex="-1">Linux 6.1 以上 <a class="header-anchor" href="#linux-6-1-以上" aria-label="Permalink to &quot;Linux 6.1 以上&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>自 Linux 6.1 开始，网迅科技旗下的网卡产品已进入 Linux 内核主线，不再需要另外安装驱动源码。</p></div><p>此时若未识别到硬件，仅需执行 <code>modprobe txgbe</code>（对于25GbE、万兆网卡产品） 或 <code>modprobe ngbe</code>（对于千兆网卡产品） 即可。</p><p><strong>若您当前使用的发行版内核低于 6.1，请继续阅读以下内容：</strong></p><h2 id="wx1820-系列-wx5025-系列" tabindex="-1">WX1820 系列 &amp; WX5025 系列 <a class="header-anchor" href="#wx1820-系列-wx5025-系列" aria-label="Permalink to &quot;WX1820 系列 &amp; WX5025 系列&quot;">​</a></h2><p>该系列为万兆和 25GbE 以太网络控制器芯片，包含以下芯片产品和硬件产品：</p><table tabindex="0"><thead><tr><th>网卡芯片</th><th>硬件适配器</th></tr></thead><tbody><tr><td>SP1000A (10GbE)</td><td>RP1000P2SFP</td></tr><tr><td></td><td>RP1000P2SFP-A03</td></tr><tr><td>WX1820AL (10GbE)</td><td>RP2000P2SFP</td></tr><tr><td></td><td>RP2000P2SFP-SW</td></tr><tr><td>WX5025 (25GbE)</td><td>FF5025-DDATACXX</td></tr><tr><td></td><td>FF5025-DDATACA1</td></tr></tbody></table><p>从<a href="https://www.net-swift.com/c/down.html" target="_blank" rel="noreferrer">网迅科技下载中心</a>获取驱动源码，对于该系列应选择 <code>网迅万兆网卡Linux PF驱动源码(txgbe-x.x.x.x)</code>（版本请跟随最新下载）。</p><p>解压得到 <code>txgbe-x.x.x.x.zip</code> 后执行以下命令（此处以目前可获取的最新版本为例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>unzip txgbe-2.1.0.zip</span></span>
<span class="line"><span>cd txgbe-2.1.0/src</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译内核模块</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>sudo make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 激活内核模块</span></span>
<span class="line"><span>modprobe txgbe</span></span></code></pre></div><h2 id="wx1860-系列" tabindex="-1">WX1860 系列 <a class="header-anchor" href="#wx1860-系列" aria-label="Permalink to &quot;WX1860 系列&quot;">​</a></h2><p>该系列为千兆以太网络控制器芯片，包含以下芯片产品和硬件产品：</p><table tabindex="0"><thead><tr><th>网卡芯片</th><th>硬件适配器</th></tr></thead><tbody><tr><td>WX1860A2</td><td>SF200T</td></tr><tr><td>WX1860A4</td><td>SF400T</td></tr><tr><td>WX1860AL2</td><td>SF200HT</td></tr><tr><td>WX1860AL4</td><td>SF400HT</td></tr></tbody></table><p>从<a href="https://www.net-swift.com/c/down.html" target="_blank" rel="noreferrer">网迅科技下载中心</a>获取驱动源码，对于该系列应选择 <code>网迅千兆网卡Linux PF驱动源码(ngbe-x.x.x.x)</code>（版本请跟随最新下载）。</p><p>解压得到 <code>ngbe-x.x.x.x.zip</code> 后执行以下命令（此处以目前可获取的最新版本为例）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>unzip ngbe-1.2.6.5.zip</span></span>
<span class="line"><span>cd ngbe-1.2.6.5/src</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译内核模块</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>sudo make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 激活内核模块</span></span>
<span class="line"><span>modprobe ngbe</span></span></code></pre></div>`,17)]))}const x=t(p,[["render",d]]);export{b as __pageData,x as default};
