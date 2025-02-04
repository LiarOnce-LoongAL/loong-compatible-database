---
outline: deep
prev: false
next: false
---
# 苏州速通半导体 (Senscomm) 无线网卡

## SCM2625A
:::warning 注意
社区已经注意到了该硬件的驱动问题，可等待上游更新。
:::

:::warning 注意
SCM2625 系列模块并未对外公开驱动源码（~~尽管 README 文件显示源码托管于 GitHub~~），驱动源码包需联系销售渠道或前往[这里下载](https://bbs.loongarch.org/d/456/6)。
:::

:::danger 警告
本教程目前仅适用于 Linux 4.19-5.4 内核版本。  
由于不同来源提供的驱动源代码在高版本内核中均无法正常编译，请等待上游化后使用。
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
