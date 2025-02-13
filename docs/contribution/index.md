---
sidebar: true
layout: doc
aside: false
prev: false
next: false
---
# 参与贡献

## 额外内容

若硬件或软件需要正式文档以说明兼容情况，请根据以下内容修改文件：

首先请根据类型到 `/docs/.vitepress/config_files/sidebar_<hardwares/lat/liblol>.js` 下填写链接地址和文档标题，范例如下：

```js
{ text: '<文档标题>', link: '<文档地址>' }
```

其中 `link` 的值与 `.yml` 文件下的 `link` 相同。
