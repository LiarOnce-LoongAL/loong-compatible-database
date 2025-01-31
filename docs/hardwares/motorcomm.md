---
outline: deep
prev: false
next: false
---

# 裕太微电子 (Motorcomm) 有线网卡

## YT6801

从裕太微官网的[产品页面](https://motor-comm.com/product/ethernet-control-chip)下载驱动源码，解压并执行脚本即可:

```bash
unzip yt6801-linux-driver-1.0.29.zip -d ./yt6801
cd yt6801

su # 安装脚本需使用 root 用户而不是 sudo
sh ./yt_nic_install.sh
```

安装完毕后检查内核模块是否成功加载：
```bash
lsmod | grep yt6801
```