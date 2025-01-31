---
outline: deep
prev: false
next: false
---
# AIC Semiconductor Wireless

## AIC8800 Series Network Cards

:::danger
This tutorial currently only applies to Linux kernel versions 4.19-6.8. For Linux kernels above 6.8, driver compilation and installation may fail due to header file issues. If you encounter compilation or installation issues, please switch to other hardware or wait for upstream updates.
:::

### M.2 PCIe

:::danger
The PCIe version lacks detailed installation instructions and urgently needs improvement.
:::

Obtain the driver source code from the [driver repository hosted by Radxa](https://github.com/radxa-pkg/aic8800).

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 
```

The PCIe interface version includes Bluetooth functionality.

```bash
# Compile WiFi driver
cd src/PCIE/driver_fw/driver/aic8800/aic8800_fdrv/
make
sudo make install

# Enable kernel modules
sudo modprobe cfg80211
sudo modprobe aic_load_fw
sudo modprobe aic8800_fdrv

cd ../../../../../../ # Return to the project root directory

# Compile Bluetooth driver
cd src/USB/driver_fw/drivers/aic_btusb/
make
sudo make install
```

### USB

For the USB interface version, it is recommended to use the [driver provided by Ugreen](https://www.lulian.cn/download/154.html). After extracting, use the compilation and installation method.  
The driver supports `AIC8800M80`, `AIC8800D80`, and `AIC8800FC` chips, and there is no need to download separate versions. Here, we use the Ugreen CM763 as an example.

```bash
unzip CM762-35264_USB无线网卡驱动_V1.3.zip
cd Linux # The driver installation package and source code are located here
cd aic8800_linux_drvier/drivers/aic8800/

# Compile the kernel module
make

# Check if the compilation was successful before installing the kernel module.
# If successful, there will be output.
ls aic_load_fw/aic_load_fw.ko
ls aic8800_fdrv/aic8800_fdrv.ko

# Install the kernel module
sudo make install
```

Now, plug the network card into the computer's USB port and check if the kernel modules are loaded:

```bash
lsmod | grep aic
```

If `aic8800_fdrv` and `aic_load_fw` are present, the installation is successful. You can now check if the WiFi functionality is working properly on your system.
