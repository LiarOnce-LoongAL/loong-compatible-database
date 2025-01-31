---
outline: deep
prev: false
next: false
---
# Senscomm Wireless

## SCM2625A

:::warning
The driver source code for the SCM2625 series modules is not publicly available (~~although the README file indicates that the source code is hosted on GitHub~~). The driver source code package must be obtained by contacting sales channels or downloaded from [here](https://bbs.loongarch.org/d/456/6).
:::

:::danger
This tutorial currently only applies to Linux kernel versions 4.19-6.8. For Linux kernels above 6.8, driver compilation and installation may fail due to header file issues. If you encounter compilation or installation issues, please switch to other hardware or wait for upstream updates.
:::

Here, we use the driver source code package provided by LB-Link as an example:

```bash
tar -zxvf jinjihu-ax-JINJIHU_SCM2625A_V2.0.10.tar.gz
cd jinjihu-ax-JINJIHU_SCM2625A_V2.0.10

# Compile the driver module
make modules

# Install the module
sudo make install
```
