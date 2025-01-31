import{_ as a,c as t,b0 as s,o as r}from"./chunks/framework.Df24InGn.js";const u=JSON.parse('{"title":"AMD GPU","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"en/hardwares/amdgpu.md","filePath":"en/hardwares/amdgpu.md"}'),o={name:"en/hardwares/amdgpu.md"};function i(n,e,p,d,l,h){return r(),t("div",null,e[0]||(e[0]=[s('<h1 id="amd-gpu" tabindex="-1">AMD GPU <a class="header-anchor" href="#amd-gpu" aria-label="Permalink to &quot;AMD GPU&quot;">​</a></h1><h2 id="gcn-1-gcn-2" tabindex="-1">GCN 1 &amp; GCN 2 <a class="header-anchor" href="#gcn-1-gcn-2" aria-label="Permalink to &quot;GCN 1 &amp; GCN 2&quot;">​</a></h2><p>Since the kernel modules <code>radeon</code> and <code>amdgpu</code> both support these two generations of graphics cards, the additional Linux kernel parameters are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0 pcie_aspm=off</span></span></code></pre></div><h2 id="gcn-4-polaris" tabindex="-1">GCN 4 (Polaris) <a class="header-anchor" href="#gcn-4-polaris" aria-label="Permalink to &quot;GCN 4 (Polaris)&quot;">​</a></h2><p>The additional Linux kernel parameters are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>amdgpu.dpm=1 pcie_aspm=off</span></span></code></pre></div><p>Previously, there were compatibility issues between the Loongson platform and the AMD Polaris architecture. However, after replacing the 7A2000 bridge chip with a fan-equipped heatsink and updating to the latest BIOS, stability has significantly improved. In this case, DPM (<code>amdgpu.dpm=1</code>) needs to be enabled. Additionally, this issue has been resolved in AOSC OS and Deepin by using the latest kernel, but the corresponding patch has not been merged upstream for some reason. If you need to use AMD Polaris architecture graphics cards, please use a new-world distribution and update to the latest kernel with the applied fix.</p><h2 id="rdna" tabindex="-1">RDNA <a class="header-anchor" href="#rdna" aria-label="Permalink to &quot;RDNA&quot;">​</a></h2><p>The Loongson platform can already use AMD RDNA architecture graphics cards at the system level when using a new-world distribution. If you are using a 3A5000-7A2000-EVB (Loongson 3A5000) or XA61200 (Loongson 3A6000) motherboard, you can choose to update the firmware from <a href="https://github.com/loongson/Firmware/tree/main/MultiArchUefiSupport" target="_blank" rel="noreferrer">here</a> to support displaying images in the BIOS interface and Grub boot interface without waiting until the system boots.</p>',10)]))}const g=a(o,[["render",i]]);export{u as __pageData,g as default};
