---
outline: deep
prev: false
next: false
---
# AIC Semiconductor Wireless

## AIC8800 Series Network Cards

:::warning
In theory, the upstream source code provided by AIC is only compitable to Linux 4.19-6.6, please follow the instructions in the steps to apply the patch for Linux 6.6 or above.
:::

### M.2 PCIe

Obtain the driver source code from the [driver repository hosted by Radxa](https://github.com/radxa-pkg/aic8800).

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 

# If the kernel version is 6.6 or higher, please apply all patches.
for patchfile in debian/patches/*.patch; do patch -p1 --dry-run < "$patchfile"; done

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

Still obtain the driver source code from the [driver repository hosted by Radxa](https://github.com/radxa-pkg/aic8800).

```bash
git clone https://github.com/radxa-pkg/aic8800 --depth 1
cd aic8800 

# If the kernel version is 6.6 or higher, please apply all patches.
for patchfile in debian/patches/*.patch; do patch -p1 --dry-run < "$patchfile"; done

# Compile WiFi driver
cd src/USB/driver_fw/drivers/aic8800/
make
sudo make install

# Enable kernel modules
sudo modprobe cfg80211
sudo modprobe aic_load_fw
sudo modprobe aic8800_fdrv
```

Now, plug the network card into the computer's USB port and check if the kernel modules are loaded:

```bash
lsmod | grep aic
```

If `aic8800_fdrv` and `aic_load_fw` are present, the installation is successful. You can now check if the WiFi functionality is working properly on your system.
