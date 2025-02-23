import{_ as i,c as a,o as e,b0 as t}from"./chunks/framework.I-VEqm2l.js";const F=JSON.parse('{"title":"提交","description":"","frontmatter":{"outline":"deep","prev":false,"next":false},"headers":[],"relativePath":"contribution/submit.md","filePath":"contribution/submit.md"}'),n={name:"contribution/submit.md"};function l(p,s,h,r,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="提交" tabindex="-1">提交 <a class="header-anchor" href="#提交" aria-label="Permalink to &quot;提交&quot;">​</a></h1><h3 id="提交方式" tabindex="-1">提交方式 <a class="header-anchor" href="#提交方式" aria-label="Permalink to &quot;提交方式&quot;">​</a></h3><p>目前可以选择以下三种方式提供数据：</p><ol><li><p>根据类型查看左侧对应的指引，之后 fork 一份<a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database" target="_blank" rel="noreferrer">本仓库</a>，修改完毕后向我发起一个PR</p></li><li><p>还是根据上一条的指引，复制模板内容填写，然后<a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues" target="_blank" rel="noreferrer">在这里</a>发起一份issue</p></li><li><p>通过 <code>hw-probe</code> 工具执行以下命令：</p></li></ol><blockquote><p><strong>注意：hw-probe 会将收集到的日志也一并上传，请酌情考虑该方式</strong></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hw-probe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -all</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -upload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将会得到以下输出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Probe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardware</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Reading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Uploaded</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DB,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Thank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Probe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://linux-hardware.org/?probe=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">生成的id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>然后<a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues" target="_blank" rel="noreferrer">在这里</a>发起一个issue，此时不需要填写 YAML 内容，提交 Probe URL 即可</p>`,7)]))}const c=i(n,[["render",l]]);export{F as __pageData,c as default};
