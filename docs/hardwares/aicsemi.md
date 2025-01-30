---
outline: deep
prev: false
next: false
---
# 爱科微 (AIC Semiconductor) 无线网卡

## AIC8800 系列网卡
:::danger 警告
本教程目前仅适用于 Linux 4.19-6.8 内核版本，Linux 6.8 以上内核可能会因为头文件问题无法通过编译安装驱动，如遇无法编译安装的情况请换用其他硬件，或等待上游更新。
:::

### M.2 PCIe
:::danger 警告
PCIe 版本缺乏详细的安装教程，急需完善
:::
从[由 Radxa 托管](https://github.com/radxa-pkg/aic8800)的驱动仓库获取驱动源码

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 
```
PCIe 接口版本包含蓝牙功能
```bash
# 编译 WiFi 驱动
cd src/PCIE/driver_fw/driver/aic8800/aic8800_fdrv/
make
sudo make install

# 启用内核模块
sudo modprobe cfg80211
sudo modprobe aic_load_fw
sudo modprobe aic8800_fdrv

cd ../../../../../../ # 回到项目根目录

# 编译蓝牙驱动
cd src/USB/driver_fw/drivers/aic_btusb/
make
sudo make install
```

### USB
USB 接口版本建议使用[绿联提供的驱动](https://www.lulian.cn/download/154.html)，解压后使用编译安装方式。  
驱动支持 `AIC8800M80`、`AIC8800D80`、`AIC8800FC` 芯片，无需另外区别下载，此处以绿联 CM763 为例。
```bash
unzip CM762-35264_USB无线网卡驱动_V1.3.zip
cd Linux # 驱动安装包和源码位于此处
cd aic8800_linux_drvier/drivers/aic8800/

# 编译内核模块
make

# 安装内核模块之前先检查是否成功编译，若有则会有输出
ls aic_load_fw/aic_load_fw.ko
ls aic8800_fdrv/aic8800_fdrv.ko

# 安装内核模块
sudo make install
```

此时将网卡插上电脑 USB 接口，检查内核模块是否加载：
```bash
lsmod | grep aic
```
存在 `aic8800_fdrv`、`aic_load_fw` 即安装成功，此时可检查系统中 WiFi 功能是否可以正常使用。