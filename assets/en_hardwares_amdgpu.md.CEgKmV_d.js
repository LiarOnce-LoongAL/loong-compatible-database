import{aw as a,z as t,aP as s,y as p}from"./chunks/framework.bhS7UQ0c.js";const u=JSON.parse('{"title":"AMDGPU","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"en/hardwares/amdgpu.md","filePath":"en/hardwares/amdgpu.md"}'),n={name:"en/hardwares/amdgpu.md"};function o(i,e,r,d,l,c){return p(),t("div",null,e[0]||(e[0]=[s('<h1 id="amdgpu" tabindex="-1">AMDGPU <a class="header-anchor" href="#amdgpu" aria-label="Permalink to &quot;AMDGPU&quot;">​</a></h1><h2 id="gcn-1-gcn-2" tabindex="-1">GCN 1 &amp; GCN 2 <a class="header-anchor" href="#gcn-1-gcn-2" aria-label="Permalink to &quot;GCN 1 &amp; GCN 2&quot;">​</a></h2><p>Since the kernel modules <code>radeon</code> and <code>amdgpu</code> support both of graphics cards, the included Linux kernel parameters are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0 pcie_aspm=off</span></span></code></pre></div><h2 id="gcn-4-polaris" tabindex="-1">GCN 4 (Polaris) <a class="header-anchor" href="#gcn-4-polaris" aria-label="Permalink to &quot;GCN 4 (Polaris)&quot;">​</a></h2><p>The included Linux kernel parameters are:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>amdgpu.dpm=1 pcie_aspm=off</span></span></code></pre></div><p>Originally due to the compatibility issue of the LoongArch platform with AMD Polaris, but the stability has been greatly improved after replacing the heatsink with a fan for the 7A2000 with the latest BIOS, which needs to be turned on DPM (<code>amdgpu.dpm=1</code>), and the problem has been solved by using the newest kernel in AOSC OS and Deepin, but the upstream has not agreed to merge the patches for some reasons.</p><p>So please use new-world distros and update to the latest kernel with the fixes applied if you need to use AMD Polaris graphics cards.</p>',9)]))}const m=a(n,[["render",o]]);export{u as __pageData,m as default};
