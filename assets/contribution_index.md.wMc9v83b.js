import{aw as t,q as d,p as a,aP as e}from"./chunks/framework.CHtiprlN.js";const y=JSON.parse('{"title":"参与贡献","description":"","frontmatter":{"layout":"doc","sidebar":false,"outline":"deep"},"headers":[],"relativePath":"contribution/index.md","filePath":"contribution/index.md"}'),s={name:"contribution/index.md"},i=e(`<h1 id="参与贡献" tabindex="-1">参与贡献 <a class="header-anchor" href="#参与贡献" aria-label="Permalink to &quot;参与贡献&quot;">​</a></h1><h2 id="硬件" tabindex="-1">硬件 <a class="header-anchor" href="#硬件" aria-label="Permalink to &quot;硬件&quot;">​</a></h2><h3 id="在填写硬件信息之前" tabindex="-1">在填写硬件信息之前 <a class="header-anchor" href="#在填写硬件信息之前" aria-label="Permalink to &quot;在填写硬件信息之前&quot;">​</a></h3><p>请根据硬件本身的类型确认分类，否则我们不会接受提交。</p><p>在将硬件兼容性信息上传到本仓库之前，请先确认硬件具体情况。</p><p>确认硬件情况后，复制模板文件 <code>template_hardware.yml</code> 到 <code>/docs/data/hardwares</code> 的指定的硬件类型中，模板文件也可以在此找到。</p><p>这是一份模板文件的内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#型号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">brand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#品牌</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#类型</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#兼容状态 -1=不兼容 0=未知 1=兼容  2=有限兼容 3=新世界可用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#备注</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#链接</span></span></code></pre></div><p><strong>根据模板文件填写完毕后，请一定要修改文件名并根据硬件类型存放到指定的文件夹中，否则我们不会接受该提交，关于文件名规则需根据硬件类型，下文会对具体的文件命名进行解释。</strong></p><p><strong>以下值均需注意大小写</strong></p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>该值填写硬件具体型号，不同的硬件类型，该值也不相同，<strong>均不需要填写品牌信息</strong>，填写规则请按下表所示：</p><table tabindex="0"><thead><tr><th>硬件类型</th><th>型号填写</th></tr></thead><tbody><tr><td>内存(所有接口类型)</td><td>型号位于内存条产品贴纸上的条形码处，根据厂商的不同一般位于容量电压时序信息的左侧或右侧，若内存条属于厂商的一个系列中，可以在型号前添加该系列的名称，例如 <code>HyperX </code>(有空格，需使用空格隔开)。</td></tr><tr><td>显卡</td><td>对外的公开硬件名称，例如 <code>Radeon RX 580</code>，若有不同流处理器版本需小括号说明，例如 <code>Radeon RX 580 (2048SP)</code>。</td></tr><tr><td>有线网卡</td><td>对外的公开硬件名称，若为 PCIe 接口需在此标明 <code>(PCIe)</code>，若为 USB 接口需在此标明 <code>(USB)</code>。</td></tr><tr><td>无线网卡</td><td>对外的公开硬件名称，若为 PCIe 接口需在此标明 <code>(PCIe)</code>，若为 USB 接口需在此标明 <code>(USB)</code>。</td></tr><tr><td>固态硬盘(SATA)</td><td>厂商对该硬件的对外宣传型号，例如 <code>SC001 Active</code>。</td></tr><tr><td>固态硬盘(NVMe)</td><td>厂商对该硬件的对外宣传型号，例如 <code>SN750 </code>。</td></tr><tr><td>机械硬盘(SATA)</td><td>厂商对该硬件的对外宣传型号，例如 <code>ST4000DM004</code>，并在结尾加上硬盘容量 (<code>4TB</code>)。</td></tr><tr><td>其他存储类设备(SATA)</td><td>厂商对该硬件的对外宣传型号，例如 <code>BC-12D2HT</code></td></tr><tr><td>键盘</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>鼠标</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>手柄控制器</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>打印机</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>扫描仪</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>打印复印一体机</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>PCIe 扩展卡</td><td>厂商对该硬件的对外宣传型号。</td></tr><tr><td>USB 设备</td><td>厂商对该硬件的对外宣传型号。</td></tr></tbody></table><h3 id="brand" tabindex="-1">brand <a class="header-anchor" href="#brand" aria-label="Permalink to &quot;brand&quot;">​</a></h3><p>该值仅填写硬件所属厂商，<strong>均需使用英语填写</strong>。</p><p>此处提供部分厂商的英文名称，可作为参考，排名不分先后：</p><table tabindex="0"><thead><tr><th>厂商</th><th>英文名称 (<code>brand</code>值)</th><th>备注</th></tr></thead><tbody><tr><td>致态/长江存储</td><td>ZHITAI/YMTC</td><td>对于长江存储旗下的原厂产品，此处均填 <code>ZHITAI/YMTC</code></td></tr><tr><td>合肥长鑫</td><td>CXMT</td><td></td></tr><tr><td>福建晋华</td><td>JHICC</td><td></td></tr><tr><td>威刚</td><td>ADATA</td><td></td></tr><tr><td>七彩虹</td><td>Colorful</td><td></td></tr><tr><td>江波龙</td><td>longsys</td><td></td></tr><tr><td>江波龙(FORESEE)</td><td>FORESEE</td><td></td></tr><tr><td>西安紫光国芯</td><td>UniIC</td><td></td></tr><tr><td>三星</td><td>Samsung</td><td></td></tr><tr><td>思得/SK海力士</td><td>Solidigm/SK Hynix</td><td>对于SK海力士旗下产品，此处均填 <code>Solidigm/SK Hynix</code>（包括内存条产品和固态硬盘产品）</td></tr><tr><td>铨兴</td><td>Quanxing</td><td></td></tr><tr><td>美商海盗船</td><td>Corsair</td><td></td></tr><tr><td>美光/英睿达</td><td>Crucial/Micron</td><td>对于美光旗下的原厂产品，此处均填 <code>Crucial/Micron</code></td></tr><tr><td>光威</td><td>Gloway</td><td></td></tr><tr><td>金百达</td><td>KingBank</td><td></td></tr><tr><td>裕太微</td><td>Motorcomm</td><td></td></tr><tr><td>沐创</td><td>MUCSE</td><td></td></tr><tr><td>铠侠</td><td>Kioxia</td><td></td></tr><tr><td>东芝</td><td>Toshiba</td><td></td></tr><tr><td>西数(西部数据)</td><td>Western Digital</td><td></td></tr><tr><td>闪迪</td><td>Sandisk</td><td></td></tr><tr><td>超威半导体</td><td>AMD</td><td></td></tr><tr><td>英特尔</td><td>Intel</td><td></td></tr><tr><td>英伟达</td><td>NVIDIA</td><td></td></tr></tbody></table><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>该值填写硬件类型，具体硬件类型按下表所示。</p><p>由于硬件种类繁多，该表可能无法做到及时更新，可在该代码找到目前允许收录的最新类型，并填入到 <code>type</code> 中：</p><table tabindex="0"><thead><tr><th>类型</th><th><code>type</code> 对应值</th><th>备注</th></tr></thead><tbody><tr><td>内存(UDIMM)</td><td>Memory_UDIMM</td><td>一般消费级内存条，常见于桌面台式机平台</td></tr><tr><td>内存(UDIMM/ECC)</td><td>Memory_UDIMMECC</td><td>一般消费级内存条，但带有 ECC 功能，常见于使用消费级处理器的工作站</td></tr><tr><td>内存(RDIMM)</td><td>Memory_RDIMM</td><td>包含寄存器的内存条，即 ECC REG，常见于服务器平台</td></tr><tr><td>内存(SO-DIMM)</td><td>Memory_SODIMM</td><td>一般消费级内存条，常见于笔记本移动平台</td></tr><tr><td>显卡</td><td>GPU</td><td></td></tr><tr><td>有线网卡</td><td>Ethernet</td><td>此处包含 PCIe 接口网卡和 USB 网卡</td></tr><tr><td>无线网卡</td><td>Wireless</td><td>此处包含 PCIe 接口网卡和 USB 网卡</td></tr><tr><td>固态硬盘(SATA)</td><td>SSD_SATA</td><td>使用 SATA 7+15 接口，外形 2.5 寸的固态硬盘，或使用 M.2 B+M 接口（两个缺口）同时贴纸上有标明 SATA logo 的。</td></tr><tr><td>固态硬盘(NVMe)</td><td>SSD_NVMe</td><td>所有其他使用 NVMe 协议的硬盘，不限接口（包含 M.2、U.2、U.3、E1.S、E3.S、E1.L 等接口）</td></tr><tr><td>机械硬盘(SATA)</td><td>HDD_SATA</td><td>使用 SATA 7+15 接口，外形 2.5 寸或 3.5 寸的机械硬盘，此处不包含使用 SAS 接口的产品</td></tr><tr><td>其他存储类设备(SATA)</td><td>Storage_SATA</td><td>使用 SATA 7+15 接口的其他存储设备，例如光驱、磁带机等</td></tr><tr><td>键盘</td><td>Keyboard</td><td></td></tr><tr><td>鼠标</td><td>Mouse</td><td></td></tr><tr><td>手柄控制器</td><td>Gamepad</td><td>各类游戏手柄</td></tr><tr><td>打印机</td><td>Printer</td><td>此处仅表示单打印功能的打印机</td></tr><tr><td>扫描仪</td><td>Scanner</td><td>此处仅表示单扫描功能的扫描仪</td></tr><tr><td>打印复印一体机</td><td>Printer_AIO</td><td>此处仅表示支持打印、复印、扫描、传真等功能的多功能一体机</td></tr><tr><td>PCIe 扩展卡</td><td>PCIe_Card</td><td>所有除以上硬件类型外的其他<strong>使用 PCIe 接口</strong>的硬件归属于此，例如 HBA 卡</td></tr><tr><td>USB 设备</td><td>USB_Device</td><td>所有除以上硬件类型外的其他<strong>使用 USB 接口</strong>的硬件归属于此</td></tr></tbody></table><h3 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h3><p>填写该硬件目前的兼容状态，此处均为整数（不是字符串），数值与对应关系如下表所示：</p><table tabindex="0"><thead><tr><th>数字</th><th>对应值</th></tr></thead><tbody><tr><td>0</td><td>未知</td></tr><tr><td>1</td><td>兼容</td></tr><tr><td>2</td><td>有限兼容</td></tr><tr><td>3</td><td>新世界可用</td></tr><tr><td>-1</td><td>不兼容</td></tr></tbody></table><h3 id="notes" tabindex="-1">notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;notes&quot;">​</a></h3><p>该硬件需要注意的简短备注信息，可以将中文产品信息填写在此处。</p><p>对于其他类型的硬件设备，则需要在此备注硬件类型，例如光驱、HBA卡、采集卡等，未来可能会对此进行细分。</p><p>过长的内容或有必要通过长文进行解释的请编写为文档，并在 <code>link</code> 中填写文档地址。</p><h3 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h3><p>若该硬件需要正式文档以说明兼容情况，请在 <code>/docs/hardwares/</code> 下存放 Markdown 文件。</p><p>对于硬件，我们建议使用其在 Linux 下的内核模块的名称来命名，例如现代 Intel 无线卡，则命名为 <code>iwlwifi.md</code>。</p><p>然后该值的填写格式如下（<strong>请注意文件名不能使用中文，请使用全英文</strong>）。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/hardwares/&lt;所写的markdown文件名&gt;</span></span></code></pre></div><p>之后根据<a href="#external-docs">此处</a>的指示将文档展示在指定位置。</p><h3 id="最后的文件命名和存放位置" tabindex="-1">最后的文件命名和存放位置 <a class="header-anchor" href="#最后的文件命名和存放位置" aria-label="Permalink to &quot;最后的文件命名和存放位置&quot;">​</a></h3><p>对于文件命名和存放位置，请参考以下表格：</p><table tabindex="0"><thead><tr><th>硬件类型</th><th>命名方式</th><th>存放位置</th></tr></thead><tbody><tr><td>内存(所有接口类型)</td><td><code>&lt;在产品本身提供的贴纸信息上的具体型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Memory</code></td></tr><tr><td>显卡</td><td><code>&lt;硬件型号简写&gt;.yml</code>，例如对于 <code>Radeon RX 6400</code>，仅需命名 <code>rx6400.yml</code> 即可。</td><td><code>GPU</code></td></tr><tr><td>有线网卡</td><td><code>&lt;硬件具体型号&gt;.yml</code></td><td><code>Ethernet</code></td></tr><tr><td>无线网卡</td><td><code>&lt;硬件型号简写&gt;.yml</code>，例如对于 <code>Intel AX210网卡</code>，仅需命名 <code>ax210.yml</code> 即可。</td><td><code>Wireless</code></td></tr><tr><td>固态硬盘(SATA)</td><td><code>&lt;厂商对该硬件的对外宣传型号的简写&gt;.yml</code>，例如 <code>ZHITAI SC001 Active</code>，仅需命名 <code>sc001.yml</code> 即可，若前缀相同则需要补充多余后缀以区分，例如 <code>ZHITAI SC001 XT</code>，则需命名为 <code>sc001xt.yml</code>。</td><td><code>SSD_SATA</code></td></tr><tr><td>固态硬盘(NVMe)</td><td><code>&lt;厂商对该硬件的对外宣传型号的简写&gt;.yml </code>，例如 <code>Western Digital SN750 </code>，仅需命名 <code>sn750.yml </code>即可，其他注意事项同 <code>固态硬盘(SATA)</code>。</td><td><code>SSD_NVME</code></td></tr><tr><td>机械硬盘(SATA)</td><td><code>&lt;厂商对该硬件在官方文档中所示的型号&gt;.yml</code>，例如 <code>Seagate ST4000DM004</code>，则需命名 <code>ST4000DM004.yml</code>，与 <code>model</code> 值相同。</td><td><code>HDD_SATA</code></td></tr><tr><td>其他存储类设备(SATA)</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Storage_SATA</code></td></tr><tr><td>键盘</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Keyboard</code></td></tr><tr><td>鼠标</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Mouse</code></td></tr><tr><td>手柄控制器</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Gamepad</code></td></tr><tr><td>打印机</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Printer</code></td></tr><tr><td>扫描仪</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Scanner</code></td></tr><tr><td>打印复印一体机</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>Printer_AIO</code></td></tr><tr><td>PCIe 扩展卡</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>PCIe_Card</code></td></tr><tr><td>USB 设备</td><td><code>&lt;厂商对该硬件的对外宣传型号&gt;.yml</code>，与 <code>model</code> 值相同。</td><td><code>USB_Device</code></td></tr></tbody></table><h2 id="lat" tabindex="-1">LAT <a class="header-anchor" href="#lat" aria-label="Permalink to &quot;LAT&quot;">​</a></h2><h3 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h3><p>复制模板文件 <code>template_lat.yml</code> 到 <code>/docs/data/lat</code> 下，根据软件的英文首字母存放，若开头为数字则存放到 <code>0to9</code> 文件夹下。</p><p>这是一份模板文件的内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#软件名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#软件版本号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lat_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#LAT 版本号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">latx_or_lata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#LATX 或 LATA</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更新日期</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#兼容状态 -1=不兼容 0=未知 1=兼容  2=有限兼容 3=已有原生龙架构版本无需 LAT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#备注</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#链接</span></span></code></pre></div><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>此处填写软件名称，语言不限</p><h3 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h3><p>此处填写软件的运行版本</p><h3 id="lat-version" tabindex="-1">lat_version <a class="header-anchor" href="#lat-version" aria-label="Permalink to &quot;lat_version&quot;">​</a></h3><p>此处填写运行该软件时使用的 LAT 运行库版本，填写范例为：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1.5.2-rc1</span></span></code></pre></div><p>若该软件为 Windows 软件，还需要填写 Wine 运行库版本，填写范例为：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1.5.2-rc1 + wine-9.9-staging</span></span></code></pre></div><h3 id="latx-or-lata" tabindex="-1">latx_or_lata <a class="header-anchor" href="#latx-or-lata" aria-label="Permalink to &quot;latx_or_lata&quot;">​</a></h3><p>软件运行使用的运行库，需参考软件当前的架构，若为 x86 版本则填写 <code>LATX</code>，若为 ARM 版本则填写 <code>LATA</code>。</p><h3 id="date" tabindex="-1">date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;date&quot;">​</a></h3><p>软件的更新日期。</p><h3 id="status-1" tabindex="-1">status <a class="header-anchor" href="#status-1" aria-label="Permalink to &quot;status&quot;">​</a></h3><p>填写该软件目前的兼容状态，此处均为整数（不是字符串），数值与对应关系如下表所示：</p><table tabindex="0"><thead><tr><th>数字</th><th>对应值</th></tr></thead><tbody><tr><td>0</td><td>未知</td></tr><tr><td>1</td><td>兼容</td></tr><tr><td>2</td><td>有限兼容</td></tr><tr><td>3</td><td>原生可用</td></tr><tr><td>-1</td><td>不兼容</td></tr></tbody></table><h3 id="notes-1" tabindex="-1">notes <a class="header-anchor" href="#notes-1" aria-label="Permalink to &quot;notes&quot;">​</a></h3><p>该软件需要注意的简短备注信息。</p><p>过长的内容或有必要通过长文进行解释的请编写为文档，并在 <code>link</code> 中填写文档地址。</p><h3 id="link-1" tabindex="-1">link <a class="header-anchor" href="#link-1" aria-label="Permalink to &quot;link&quot;">​</a></h3><p>若该软件需要正式文档以说明兼容情况，请在 <code>/docs/lat/</code> 下存放 Markdown 文件。</p><p>该值的填写格式如下（<strong>请注意文件名不能使用中文，请使用全英文</strong>）：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lat/&lt;所写的markdown文件名&gt;</span></span></code></pre></div><p>之后根据<a href="#external-docs">此处</a>的指示将文档展示在指定位置。</p><h2 id="liblol" tabindex="-1">LibLoL <a class="header-anchor" href="#liblol" aria-label="Permalink to &quot;LibLoL&quot;">​</a></h2><h3 id="开始-1" tabindex="-1">开始 <a class="header-anchor" href="#开始-1" aria-label="Permalink to &quot;开始&quot;">​</a></h3><p>复制模板文件 <code>template_linlol.yml</code> 到 <code>/docs/data/liblol</code> 下，根据软件的英文首字母存放，若开头为数字则存放到 <code>0to9</code> 文件夹下。</p><p>这是一份模板文件的内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#软件ID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#软件名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#软件版本号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">liblol_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#libLoL 版本号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更新日期</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#兼容状态 -1=不兼容 0=未知 1=兼容  2=有限兼容 3=新世界可用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#备注</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#链接</span></span></code></pre></div><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>此处是软件的ID，若来自龙芯应用合作社请填写在龙芯应用合作社的ID，若非来自龙芯应用合作社则从10001开始</p><h3 id="name-1" tabindex="-1">name <a class="header-anchor" href="#name-1" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>此处填写软件名称，语言不限</p><h3 id="version-1" tabindex="-1">version <a class="header-anchor" href="#version-1" aria-label="Permalink to &quot;version&quot;">​</a></h3><p>此处填写软件的运行版本</p><h3 id="liblol-version" tabindex="-1">liblol_version <a class="header-anchor" href="#liblol-version" aria-label="Permalink to &quot;liblol_version&quot;">​</a></h3><p>此处填写运行该软件时使用的 LibLoL 运行库版本，填写范例为：<code>0.1.5</code></p><h3 id="date-1" tabindex="-1">date <a class="header-anchor" href="#date-1" aria-label="Permalink to &quot;date&quot;">​</a></h3><p>软件的更新日期，若不知道确切时间仅需写年月日即可 (YYYY-MM-DD)。</p><h3 id="status-2" tabindex="-1">status <a class="header-anchor" href="#status-2" aria-label="Permalink to &quot;status&quot;">​</a></h3><p>填写该软件目前的兼容状态，此处均为整数（不是字符串），数值与对应关系如下表所示：</p><table tabindex="0"><thead><tr><th>数字</th><th>对应值</th></tr></thead><tbody><tr><td>0</td><td>未知</td></tr><tr><td>1</td><td>兼容</td></tr><tr><td>2</td><td>有限兼容</td></tr><tr><td>3</td><td>新世界可用</td></tr><tr><td>-1</td><td>不兼容</td></tr></tbody></table><h3 id="notes-2" tabindex="-1">notes <a class="header-anchor" href="#notes-2" aria-label="Permalink to &quot;notes&quot;">​</a></h3><p>该软件需要注意的简短备注信息。</p><p><strong>若该应用是从龙芯应用合作社获取的软件请在此备注：<code>来自龙芯应用合作社</code></strong></p><p>过长的内容或有必要通过长文进行解释的请编写为文档，并在 <code>link</code> 中填写文档地址。</p><h3 id="link-2" tabindex="-1">link <a class="header-anchor" href="#link-2" aria-label="Permalink to &quot;link&quot;">​</a></h3><p>若该软件需要正式文档以说明兼容情况，请在 <code>/docs/liblol/</code> 下存放 Markdown 文件。</p><p>该值的填写格式如下（<strong>请注意文件名不能使用中文，请使用全英文</strong>）：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/liblol/&lt;所写的markdown文件名&gt;</span></span></code></pre></div><p>之后根据<a href="#external-docs">此处</a>的指示将文档展示在指定位置。</p><h2 id="额外内容" tabindex="-1">额外内容 <a class="header-anchor" href="#额外内容" aria-label="Permalink to &quot;额外内容&quot;">​</a></h2><p>若硬件或软件需要正式文档以说明兼容情况，请根据以下内容修改文件：</p><p>首先请根据类型到 <code>/docs/.vitepress/config_files/sidebar_&lt;hardwares/lat/liblol&gt;.js</code> 下填写链接地址和文档标题，范例如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;文档标题&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;文档地址&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>其中 <code>link</code> 的值与 <code>.yml</code> 文件下的 <code>link</code> 相同。</p>`,98),l=[i];function n(r,o,h,p,c,k){return a(),d("div",null,l)}const b=t(s,[["render",n]]);export{y as __pageData,b as default};