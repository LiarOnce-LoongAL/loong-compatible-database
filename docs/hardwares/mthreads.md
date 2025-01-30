---
outline: deep
prev: false
next: false
---
# 摩尔线程显卡

## MTT S70 / MTT S80
:::danger 警告
本教程仅适用于旧世界发行版，新世界发行版请等待厂商的后续更新。  
本教程仅作为搬运整理，请酌情使用。
:::

:::warning 注意
来自教程来源的提醒：  
与loongnix+dde桌面是冲突的，安装dde桌面在安装这个特定内核会循环登出，初步怀疑是麒麟内核防止竟品使用。
:::

教程来源: [https://www.bilibili.com/opus/868705187717447689](https://www.bilibili.com/opus/868705187717447689)

修改 `/etc/apt/sources.list` 文件，添加仓库地址：

```text
deb [trusted=yes] https://oldt.revysr.cc/t/loongnix-moore/ sid main
```

之后保存，执行 `apt update`，之后升级安装特定内核：

```bash
apt install linux-image-5.4.18-101-generic linux-modules-5.4.18-101-generic linux-modules-extra-5.4.18-101-generic
```

安装完毕后，安装 musa：

```bash
apt install musa
```
