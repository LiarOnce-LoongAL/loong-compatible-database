---
outline: deep
prev: false
next: false
---
# 网迅科技 (Wangxun/NetSwift) 有线网卡

## Linux 6.1 以上

:::tip 提示
自 Linux 6.1 开始，网迅科技旗下的网卡产品已进入 Linux 内核主线，不再需要另外安装驱动源码。
:::

此时若未识别到硬件，仅需执行 `modprobe txgbe`（对于25GbE、万兆网卡产品） 或 `modprobe ngbe`（对于千兆网卡产品） 即可。

**若您当前使用的发行版内核低于 6.1，请继续阅读以下内容：**

## WX1820 系列 & WX5025 系列

该系列为万兆和 25GbE 以太网络控制器芯片，包含以下芯片产品和硬件产品：

| 网卡芯片          | 硬件适配器      |
| ----------------- | --------------- |
| SP1000A (10GbE)   | RP1000P2SFP     |
|                   | RP1000P2SFP-A03 |
| WX1820AL (10GbE) | RP2000P2SFP     |
|                   | RP2000P2SFP-SW  |
| WX5025 (25GbE)    | FF5025-DDATACXX |
|                   | FF5025-DDATACA1 |

从[网迅科技下载中心](https://www.net-swift.com/c/down.html)获取驱动源码，对于该系列应选择 `网迅万兆网卡Linux PF驱动源码(txgbe-x.x.x.x)`（版本请跟随最新下载）。

解压得到 `txgbe-x.x.x.x.zip` 后执行以下命令（此处以目前可获取的最新版本为例）：

```
unzip txgbe-2.1.0.zip
cd txgbe-2.1.0/src

# 编译内核模块
make
sudo make install

# 激活内核模块
modprobe txgbe
```

## WX1860 系列

该系列为千兆以太网络控制器芯片，包含以下芯片产品和硬件产品：

| 网卡芯片  | 硬件适配器 |
| --------- | ---------- |
| WX1860A2  | SF200T     |
| WX1860A4  | SF400T     |
| WX1860AL2 | SF200HT    |
| WX1860AL4 | SF400HT    |

从[网迅科技下载中心](https://www.net-swift.com/c/down.html)获取驱动源码，对于该系列应选择 `网迅千兆网卡Linux PF驱动源码(ngbe-x.x.x.x)`（版本请跟随最新下载）。

解压得到 `ngbe-x.x.x.x.zip` 后执行以下命令（此处以目前可获取的最新版本为例）：

```
unzip ngbe-1.2.6.5.zip
cd ngbe-1.2.6.5/src

# 编译内核模块
make
sudo make install

# 激活内核模块
modprobe ngbe
```
