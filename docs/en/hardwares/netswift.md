---
outline: deep
prev: false
next: false
---
# Wangxun/NetSwift Ethernet

## Linux 6.1 and Above

:::tip
Starting from Linux 6.1, the NIC products from Wangxun have been integrated into the Linux kernel mainline, and there is no longer a need to install the driver source code separately.
:::

If the hardware is not recognized, simply execute `modprobe txgbe` (for 25 GbE and 10 GbE NIC products) or `modprobe ngbe` (for 1 GbE NIC products).

**If the kernel version of your current distribution is below 6.1, please continue reading the following content:**

## WX1820 Series & WX5025 Series

This series are 10 GbE and 25 GbE network controller chips, including the following chip products and hardware products:

| Network Chip      | Hardware Adapter |
| ----------------- | ---------------- |
| SP1000A (10GbE)   | RP1000P2SFP      |
|                   | RP1000P2SFP-A03  |
| WX1820AL (10GbE) | RP2000P2SFP      |
|                   | RP2000P2SFP-SW   |
| WX5025 (25GbE)    | FF5025-DDATACXX  |
|                   | FF5025-DDATACA1  |

Download the driver source code from the [NetSwift Download Center](https://www.net-swift.com/c/down.html). For this series, select  `网迅万兆网卡Linux PF驱动源码(txgbe-x.x.x.x)` (please follow the latest version available).

After extracting `txgbe-x.x.x.x.zip`, execute the following commands (using the latest available version as an example):

```
unzip txgbe-2.1.0.zip
cd txgbe-2.1.0/src

# Compile the kernel module
make
sudo make install

# Activate the kernel module
sudo modprobe txgbe
```

## WX1860 Series

This series are 1 GbE network controller chips, including the following chip products and hardware products:

| Network Chip | Hardware Adapter |
| ------------ | ---------------- |
| WX1860A2     | SF200T           |
| WX1860A4     | SF400T           |
| WX1860AL2    | SF200HT          |
| WX1860AL4    | SF400HT          |

Download the driver source code from the [NetSwift Download Center](https://www.net-swift.com/c/down.html). For this series, select `网迅千兆网卡Linux PF驱动源码(ngbe-x.x.x.x)` (please follow the latest version available).

After extracting `ngbe-x.x.x.x.zip`, execute the following commands (using the latest available version as an example):

```
unzip ngbe-1.2.6.5.zip
cd ngbe-1.2.6.5/src

# Compile the kernel module
make
sudo make install

# Activate the kernel module
sudo modprobe ngbe
```
