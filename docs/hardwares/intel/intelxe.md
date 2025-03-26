---
outline: deep
prev: false
next: false
---
# Intel 显卡
::: warning 注意
目前 Intel 独显的支持仍处于初步阶段，请关注上游后续更新。
:::
## Xe 独显 (DG1) {#xe-dg1}

若在龙芯平台使用 Linux 6.8 以上内核版本的新世界发行版（例如 AOSC OS， ArchLinux for Loong），那么则可以在系统层面中使用 Intel Xe 架构的独立显卡。

如果您使用的是 3A5000-7A2000-EVB(龙芯3A5000) 或 XA61200(龙芯3A6000) 主板，则可以选择更新[这里](https://github.com/loongson/Firmware/tree/main/MultiArchUefiSupport)的固件，以支持在包括 BIOS 界面和 Grub 引导界面中显示画面。

由于在龙芯平台使用 `i915` 模块有兼容性问题，需要强制使用 `xe` 内核模块，并同时保持 Mesa 为最新版本。

在终端运行该命令：Note

```bash
lspci -nn | grep VGA
```

然后截取到硬件 PCI ID，之后添加以下内核参数：

```
i915.force_probe=!4905 xe.force_probe=4905
```

此处也提供对应显卡的 PCI ID：

| 显卡     | PCI ID |
| -------- | ------ |
| DG1 96EU | 4905   |
| DG1 80EU | 4908   |
| Arc A380 | 56a5   |
| Arc A580 | 56a2   |
| Arc A750 | 56a1   |
| Arc A770 | 56a0   |

## Arc A 系列独显 (Alchemist / DG2) {#alchemist-dg2}

目前龙芯平台使用 Arc A 系列独显有严重的性能劣化（例如 glmark2 分数仅200分左右），请配合 `xe` 内核模块酌情使用。
