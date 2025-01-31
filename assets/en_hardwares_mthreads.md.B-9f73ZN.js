import{_ as s,c as t,b0 as a,o as i}from"./chunks/framework.Df24InGn.js";const u=JSON.parse('{"title":"Moore Threads GPU","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"en/hardwares/mthreads.md","filePath":"en/hardwares/mthreads.md"}'),l={name:"en/hardwares/mthreads.md"};function r(o,e,n,p,d,h){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="moore-threads-gpu" tabindex="-1">Moore Threads GPU <a class="header-anchor" href="#moore-threads-gpu" aria-label="Permalink to &quot;Moore Threads GPU&quot;">​</a></h1><h2 id="mtt-s70-mtt-s80" tabindex="-1">MTT S70 / MTT S80 <a class="header-anchor" href="#mtt-s70-mtt-s80" aria-label="Permalink to &quot;MTT S70 / MTT S80&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This tutorial is only applicable to old-world distributions. For new-world distributions, please wait for updates from the manufacturer. This tutorial is compiled and shared for reference only. Use it at your discretion.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>A reminder from the tutorial source: There is a conflict with Loongnix and DDE. Installing the DDE with this specific kernel will cause a logout loop. It is preliminarily suspected that the Kylinsoft kernel prevents competitors from using it.</p></div><p>Tutorial source: <a href="https://www.bilibili.com/opus/868705187717447689" target="_blank" rel="noreferrer">https://www.bilibili.com/opus/868705187717447689</a></p><p>Modify the <code>/etc/apt/sources.list</code> file and add the repository address:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>deb [trusted=yes] https://oldt.revysr.cc/t/loongnix-moore/ sid main</span></span></code></pre></div><p>After saving, execute <code>apt update</code>, then upgrade and install the specific kernel:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-image-5.4.18-101-generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-modules-5.4.18-101-generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-modules-extra-5.4.18-101-generic</span></span></code></pre></div><p>After installation, install musa:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> musa</span></span></code></pre></div>',11)]))}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
