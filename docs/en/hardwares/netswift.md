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

If the hardware is not recognized, simply execute `modprobe txgbe` (for 10 Gigabit NIC products) or `modprobe ngbe` (for Gigabit NIC products).

**If the kernel version of your current distribution is below 6.1, please continue reading the following content:**

## WX1820 Series {#wx1820}

This series is a 10 Gigabit Ethernet network controller chip, including the following chip products and hardware products:

| Network Chip | Hardware Adapter      |
| ------------ | --------------------- |
| SP1000A      | RP1000P2SFP           |
|              | RP1000P2SFP-A03       |
| WX1820AL     | RP2000P2SFP           |
|              | RP2000P2SFP-SW        |

Download the driver source code from the [NetSwift Download Center](https://www.net-swift.com/c/down.html). For this series, select  `网迅万兆网卡Linux PF驱动源码(txgbe-x.x.x.x)` (please follow the latest version available).

After extracting `txgbe-x.x.x.x.zip`, execute the following commands (using the latest available version as an example):

```
unzip txgbe-1.3.6.4.zip
cd txgbe-1.3.6.4/src

# Compile the kernel module
make
sudo make install

# Activate the kernel module
sudo modprobe txgbe
```

## WX1860 Series {#wx1860}

This series is a Gigabit Ethernet network controller chip, including the following chip products and hardware products:

| Network Chip  | Hardware Adapter |
| ------------- | ---------------- |
| WX1860A2      | SF200T           |
| WX1860A4      | SF400T           |
| WX1860AL2     | SF200HT          |
| WX1860AL4     | SF400HT          |

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