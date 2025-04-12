import{_ as t,c as d,o as r,b0 as a}from"./chunks/framework.DYkI_OET.js";const u=JSON.parse('{"title":"Hardware Information","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"en/contribution/hardwares.md","filePath":"en/contribution/hardwares.md"}'),o={name:"en/contribution/hardwares.md"};function i(n,e,s,l,h,c){return r(),d("div",null,e[0]||(e[0]=[a(`<h1 id="hardware-information" tabindex="-1">Hardware Information <a class="header-anchor" href="#hardware-information" aria-label="Permalink to &quot;Hardware Information&quot;">​</a></h1><h2 id="before-entering-the-hardware-information" tabindex="-1">Before entering the hardware information <a class="header-anchor" href="#before-entering-the-hardware-information" aria-label="Permalink to &quot;Before entering the hardware information&quot;">​</a></h2><p>Please confirm the classification based on the type of hardware itself, otherwise we will not accept the submission.</p><p>Before uploading hardware compatibility information to this repository, please confirm the hardware specifics.</p><p>After confirming the hardware, copy the template file <code>template_hardware.yml</code> to the specified hardware type in <code>/docs/data/hardwares</code>, where the template file can also be found.</p><p>This is a copy of the template file:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">brand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notes_en</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For english notes(if you have)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link_en</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For english link(if you have)</span></span></code></pre></div><p><strong>After filling out the file according to the template file, please make sure to modify the file name and store it in the specified folder according to the hardware type, otherwise we will not accept the submission. Regarding the rule that the file name needs to be according to the hardware type, the specific file naming will be explained below.</strong></p><p><strong>The following values are case sensitive</strong>.</p><h2 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h2><p>The value to fill in the hardware specific model, different hardware types, the value is not the same, <strong>do not required to fill in the brand information</strong>, fill in the rules as shown in the table below:</p><table tabindex="0"><thead><tr><th>Hardware type</th><th>Model</th></tr></thead><tbody><tr><td>Memory (All Interface Types)</td><td>The model number is located at the bar-code on the sticker of the memory stick, depending on the manufacturer it is usually located on the left or right side of the capacity and voltage timing information, if the memory stick belongs to one of the products&#39; series, you can add the name of the series in front of the model number, for example,<code>HyperX </code> (there is a space, you need to use a space to separate).</td></tr><tr><td>Graphics Card</td><td>The name of the publicly available hardware, e.g.<code>Radeon RX 580</code>, with different SP versions in parentheses, e.g. <code>Radeon RX 580 (2048SP)</code>.</td></tr><tr><td>Ethernet</td><td>The publicly available hardware names should indicate (<code>PCIe</code>) for PCIe and (<code>USB</code>) for USB.</td></tr><tr><td>Wireless</td><td>The publicly available hardware names should indicate (<code>PCIe</code>) for PCIe and (<code>USB</code>) for USB.</td></tr><tr><td>SATA SSD</td><td>Manufacturer&#39;s publicized model number for the hardware，e.g.<code>SC001 Active</code>。</td></tr><tr><td>NVMe SSD</td><td>Manufacturer&#39;s publicized model number for the hardware，e.g.<code>SN750</code>。</td></tr><tr><td>SATA HDD</td><td>Manufacturer&#39;s publicized model number for the hardware，e.g.<code>ST4000DM004</code>，and add the HDD capacity at the end (e.g. <code>4TB</code>)。</td></tr><tr><td>SATA Storage</td><td>Manufacturer&#39;s publicized model number for the hardware，e.g.<code>BC-12D2HT</code></td></tr><tr><td>Keyboard</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>Mouse</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>Gamepad</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>Printer</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>Scanner</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>All-in-One Printer</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>PCIe Card</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr><tr><td>USB Devices</td><td>Manufacturer&#39;s publicized model number for the hardware.</td></tr></tbody></table><h2 id="arch" tabindex="-1">arch <a class="header-anchor" href="#arch" aria-label="Permalink to &quot;arch&quot;">​</a></h2><p>The value to fill in the hardware&#39;s architecture name or series name, or leave it blank if there is none.</p><h2 id="brand" tabindex="-1">brand <a class="header-anchor" href="#brand" aria-label="Permalink to &quot;brand&quot;">​</a></h2><p>This value is only filled in by the manufacturer to which the hardware belongs, and <strong>all must be filled in using English</strong>.</p><p>The English names of some of the manufacturers are provided here for reference in no particular order:</p><table tabindex="0"><thead><tr><th>Brand English Name<br>(<code>brand</code> value)</th><th>Notes</th></tr></thead><tbody><tr><td>ZHITAI/YMTC</td><td>For the products of YMTC, all the products here are filled with <code>ZHITAI/YMTC</code></td></tr><tr><td>CXMT</td><td></td></tr><tr><td>JHICC</td><td></td></tr><tr><td>ADATA</td><td></td></tr><tr><td>Colorful</td><td></td></tr><tr><td>longsys/FORESEE</td><td>For the products of longsys, fill in <code>longsys/FORESEE</code> here (including memory sticks and SSDs).</td></tr><tr><td>UniIC</td><td></td></tr><tr><td>Samsung</td><td></td></tr><tr><td>Solidigm/SK Hynix</td><td>For the products of SK Hynix, fill in <code>Solidigm/SK Hynix</code> (including memory sticks and SSDs).</td></tr><tr><td>Quanxing</td><td></td></tr><tr><td>Corsair</td><td></td></tr><tr><td>Crucial/Micron</td><td>For the products of Micron, fill in <code>Crucial/Micron</code> here.</td></tr><tr><td>POWEV</td><td>POWEV&#39;s brands include: GLOWAY, Asgard, CUSO, and SINKER, fill in <code>POWEV</code> here and fill brand in <code>arch</code>.</td></tr><tr><td>KingBank</td><td></td></tr><tr><td>Motorcomm</td><td></td></tr><tr><td>MUCSE</td><td></td></tr><tr><td>Kioxia</td><td></td></tr><tr><td>Toshiba</td><td></td></tr><tr><td>Western Digital</td><td></td></tr><tr><td>Sandisk</td><td></td></tr><tr><td>AMD</td><td></td></tr><tr><td>Intel</td><td></td></tr><tr><td>NVIDIA</td><td>Since Mellanox was acquired by NVIDIA, all Mellanox products are owned by NVIDIA.</td></tr></tbody></table><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><p>This value is filled in with the hardware type, which is shown in the table below.</p><p>Due to the wide variety of hardware types, the table may not be up to date, so you can find the latest types that are currently allowed to be included in this code and fill them into <code>type</code>:</p><table tabindex="0"><thead><tr><th>Type</th><th><code>type</code> value</th><th>Notes</th></tr></thead><tbody><tr><td>Memory UDIMM</td><td>Memory_UDIMM</td><td>General consumer-grade memory sticks, commonly found on desktop platforms.</td></tr><tr><td>Memory UDIMM/ECC</td><td>Memory_UDIMMECC</td><td>Generic consumer-grade memory sticks, but with ECC functionality, commonly found in workstations with consumer-grade or server-grade processors.</td></tr><tr><td>Memory RDIMM</td><td>Memory_RDIMM</td><td>Memory sticks containing registers, known as ECC REG, are commonly found in server platforms.</td></tr><tr><td>Memory SO-DIMM</td><td>Memory_SODIMM</td><td>General consumer-grade memory sticks, commonly found in laptop platforms.</td></tr><tr><td>Graphics Card</td><td>GPU</td><td></td></tr><tr><td>Ethernet</td><td>Ethernet</td><td>PCIe NICs and USB NICs are included here.</td></tr><tr><td>Wireless</td><td>Wireless</td><td>PCIe NICs and USB NICs are included here.</td></tr><tr><td>SATA SSD</td><td>SSD_SATA</td><td>SSDs that use the SATA 7+15 interface in a 2.5” form factor, or use the M.2 B+M key (two notches) with the SATA logo on the sticker.</td></tr><tr><td>NVMe SSD</td><td>SSD_NVMe</td><td>All other hard disks using the NVMe protocol, regardless of interface (including M.2, U.2, U.3, E1.S, E3.S, E1.L interfaces).</td></tr><tr><td>SATA HDD</td><td>HDD_SATA</td><td>HDD in a 2.5“ or 3.5” form factor using the SATA 7+15 interface, excluding products using the SAS.</td></tr><tr><td>SATA Storage</td><td>Storage_SATA</td><td>Other storage devices using the SATA 7+15 interface, such as optical drives, tape drives, etc.</td></tr><tr><td>Keyboard</td><td>Keyboard</td><td></td></tr><tr><td>Mouse</td><td>Mouse</td><td></td></tr><tr><td>Gamepad</td><td>Gamepad</td><td>Various gamepads.</td></tr><tr><td>Printer</td><td>Printer</td><td>This represents only printers with a single printing function.</td></tr><tr><td>Scanner</td><td>Scanner</td><td>This represents only scanners with a single scanning function</td></tr><tr><td>All-in-One Printer</td><td>Printer_AIO</td><td>This only means MFPs that support printing, copying, scanning, faxing, etc.</td></tr><tr><td>PCIe Card</td><td>PCIe_Card</td><td>All hardware types other than those listed above<strong>that use the PCIe</strong> fall under this category, such as HBA cards.</td></tr><tr><td>USB Devices</td><td>USB_Device</td><td>All hardware types other than those listed above<strong>that use the USB</strong> fall under this category.</td></tr></tbody></table><h2 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h2><p>Fill in the current compatibility status of the hardware, here are integers (not strings), the value and the corresponding relationship as shown in the table below:</p><table tabindex="0"><thead><tr><th>Number</th><th>Equivalent value</th></tr></thead><tbody><tr><td>0</td><td>Unknown</td></tr><tr><td>1</td><td>Compatible</td></tr><tr><td>2</td><td>Partial Support</td></tr><tr><td>3</td><td>New-world Available</td></tr><tr><td>-1</td><td>Unsupported</td></tr></tbody></table><h2 id="notes" tabindex="-1">notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;notes&quot;">​</a></h2><p>A short note of information to note about this hardware.</p><p>It can be filled in here with the Chinese product information.</p><p><strong>Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key <code>notes_en</code> here.</strong></p><p>For other types of hardware devices, you need to note the type of hardware here, such as optical drives, HBA cards, capture cards, etc., which may be subdivided in the future.</p><p>If the content is too long, or if it is necessary to explain in a long text, please write it as a document and fill in the document address in the <code>link</code>.</p><h2 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h2><p>If the hardware requires formal documentation for compatibility, please store the Markdown file under <code>/docs/hardwares/</code>.</p><p>For hardware, we recommend naming it after its kernel module under Linux, e.g. a modern Intel wireless card would be named <code>iwlwifi.md</code>.</p><p><strong>Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key <code>link_en</code> here.</strong></p><p>The value is then filled out in the following format (<strong>Please note that the file name cannot be in Chinese, please use full English</strong>):</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/hardwares/&lt;markdown file name&gt;</span></span></code></pre></div><p>The document is then displayed in the specified location as directed <a href="#external-docs">here</a>.</p><h2 id="final-file-naming-and-storage-location" tabindex="-1">Final file naming and storage location <a class="header-anchor" href="#final-file-naming-and-storage-location" aria-label="Permalink to &quot;Final file naming and storage location&quot;">​</a></h2><p>For file naming and locations, please refer to the table below:</p><table tabindex="0"><thead><tr><th>Hardware type</th><th>Nomenclature</th><th>Location</th></tr></thead><tbody><tr><td>Memory (All Interface Types)</td><td>The specific model number on the sticker information provided on the product itself,<code>&lt;model&gt;.yml</code>，same value as <code>model</code>.</td><td><code>Memory</code></td></tr><tr><td>Graphics card</td><td><code>&lt;model abbreviation&gt;.yml</code>. For example, for <code>Radeon RX 6400</code>, simply name <code>rx6400.yml</code>.</td><td><code>GPU</code></td></tr><tr><td>Ethernet</td><td><code>&lt;model abbreviation&gt;.yml</code></td><td><code>Ethernet</code></td></tr><tr><td>Wireless</td><td><code>&lt;model abbreviation&gt;.yml</code>，For example, for <code>Intel Wi-Fi 6 AX210</code>, simply name <code>ax210.yml</code>.</td><td><code>Wireless</code></td></tr><tr><td>SATA SSD</td><td>A shorthand for the manufacturer&#39;s outwardly advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, For example, <code>ZHITAI SC001 Active</code>, just name <code>sc001.yml</code>, if the prefix is the same, then you need to add extra suffix to differentiate, for example, <code>ZHITAI SC001 XT</code>, then you need to name <code>sc001xt.yml</code>.</td><td><code>SSD_SATA</code></td></tr><tr><td>NVMe SSD</td><td>A shorthand for the manufacturer&#39;s outwardly advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, For example, <code>Western Digital SN750 </code>, simply name it <code>sn750.yml </code>, with the same caveats as for <code>SATA SSD</code>.</td><td><code>SSD_NVME</code></td></tr><tr><td>SATA HDD</td><td>A shorthand for the manufacturer&#39;s outwardly advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, For example, <code>Seagate ST4000DM004</code>, you need to name <code>ST4000DM004.yml</code> with the same value as <code>model</code>.</td><td><code>HDD_SATA</code></td></tr><tr><td>SATA Storage</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Storage_SATA</code></td></tr><tr><td>Keyboard</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Keyboard</code></td></tr><tr><td>Mouse</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Mouse</code></td></tr><tr><td>Gamepad</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Gamepad</code></td></tr><tr><td>Printer</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Printer</code></td></tr><tr><td>Scanner</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Scanner</code></td></tr><tr><td>All-in-One Printer</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>Printer_AIO</code></td></tr><tr><td>PCIe Card</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>PCIe_Card</code></td></tr><tr><td>USB Devices</td><td>Manufacturer&#39;s externally advertised model number for this hardware,<code>&lt;model&gt;.yml</code>, same value as <code>model</code>.</td><td><code>USB_Device</code></td></tr></tbody></table>`,41)]))}const p=t(o,[["render",i]]);export{u as __pageData,p as default};
