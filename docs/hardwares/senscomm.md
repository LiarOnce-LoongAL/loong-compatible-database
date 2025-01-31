---
outline: deep
prev: false
next: false
---
# 苏州速通半导体 (Senscomm) 无线网卡

## SCM2625A

:::warning 注意
SCM2625 系列模块并未对外公开驱动源码（~~尽管 README 文件显示源码托管于 GitHub~~），驱动源码包需联系销售渠道或前往[这里下载](https://bbs.loongarch.org/d/456/6)。
:::

:::danger 警告
本教程目前仅适用于 Linux 4.19-6.8 内核版本，Linux 6.8 以上内核可能会因为头文件问题无法通过编译安装驱动，如遇无法编译安装的情况请换用其他硬件，或等待上游更新。
:::

此处以必联提供的驱动源码包为例：

```bash
tar -zxvf jinjihu-ax-JINJIHU_SCM2625A_V2.0.10.tar.gz
cd jinjihu-ax-JINJIHU_SCM2625A_V2.0.10

# 编译驱动模块
make modules

# 安装模块
sudo make install
```
