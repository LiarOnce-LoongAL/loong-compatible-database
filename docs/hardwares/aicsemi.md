---
outline: deep
prev: false
next: false
---
# 爱科微 (AIC Semiconductor) 无线网卡

## AIC8800 系列网卡
:::warning 注意
理论上由爱科微提供的上游源码仅适用于 Linux 4.19-6.6 内核版本，Linux 6.6 以上内核请根据步骤内的提示应用补丁。
:::

### M.2 PCIe

从[由 Radxa 托管](https://github.com/radxa-pkg/aic8800)的驱动仓库获取驱动源码

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 

# 若内核版本为 6.6 以上请应用所有补丁
for patchfile in debian/patches/*.patch; do patch -p1 --dry-run < "$patchfile"; done

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

# 启用蓝牙的内核模块
sudo modprobe aic_btusb
```

### USB

同样从[由 Radxa 托管](https://github.com/radxa-pkg/aic8800)的驱动仓库获取驱动源码

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 

# 若内核版本为 6.6 以上请应用所有补丁
for patchfile in debian/patches/*.patch; do patch -p1 --dry-run < "$patchfile"; done

# 编译 WiFi 驱动
cd src/USB/driver_fw/drivers/aic8800/
make
sudo make install

# 启用内核模块
sudo modprobe cfg80211
sudo modprobe aic_load_fw
sudo modprobe aic8800_fdrv
```

此时将网卡插上电脑 USB 接口，检查内核模块是否加载：

```bash
lsmod | grep aic
```

存在 `aic8800_fdrv`、`aic_load_fw` 即安装成功，此时可检查系统中 WiFi 功能是否可以正常使用。
