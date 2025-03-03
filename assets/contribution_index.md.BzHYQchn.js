import{_ as i,c as a,o as e,b0 as t}from"./chunks/framework.I-VEqm2l.js";const c=JSON.parse('{"title":"参与贡献","description":"","frontmatter":{"sidebar":true,"layout":"doc","aside":false,"prev":false,"next":false},"headers":[],"relativePath":"contribution/index.md","filePath":"contribution/index.md"}'),n={name:"contribution/index.md"};function l(h,s,p,r,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="参与贡献" tabindex="-1">参与贡献 <a class="header-anchor" href="#参与贡献" aria-label="Permalink to &quot;参与贡献&quot;">​</a></h1><h2 id="提交方式" tabindex="-1">提交方式 <a class="header-anchor" href="#提交方式" aria-label="Permalink to &quot;提交方式&quot;">​</a></h2><p>目前可以选择以下三种方式提供数据：</p><ol><li>根据类型查看左侧对应的指引，之后 fork 一份<a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database" target="_blank" rel="noreferrer">本仓库</a>，修改完毕后向我发起一个PR</li><li><a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues" target="_blank" rel="noreferrer">在这里</a>发起一份issue，选择<code>硬件信息/LAT/libLoL</code>对应的<code>Form</code>，根据摸板提示填写对应的表单提交</li><li>(<strong>仅针对硬件信息</strong>) 通过 <code>hw-probe</code> 工具执行以下命令：</li></ol><blockquote><p><strong>注意：hw-probe 会将收集到的日志也一并上传，请酌情考虑该方式</strong></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hw-probe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -all</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -upload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将会得到以下输出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Probe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardware</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Reading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ok</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Uploaded</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DB,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Thank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Probe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://linux-hardware.org/?probe=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">生成的id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>然后<a href="https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues" target="_blank" rel="noreferrer">在这里</a>发起一个 <code>(Markdown) 添加硬件信息 / Add Hardware Info</code> 模板 issue，提交 Probe URL 即可</p><h2 id="额外内容" tabindex="-1">额外内容 <a class="header-anchor" href="#额外内容" aria-label="Permalink to &quot;额外内容&quot;">​</a></h2><p>若fork添加硬件或软件需要正式文档以说明兼容情况，请根据以下内容修改文件：</p><p>首先请根据类型到 <code>/docs/.vitepress/config_files/sidebar_&lt;hardwares/lat/liblol&gt;.js</code> 下填写链接地址和文档标题，范例如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;文档标题&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;文档地址&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>其中 <code>link</code> 的值与 <code>.yml</code> 文件下的 <code>link</code> 相同。</p>`,12)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};
