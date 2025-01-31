---
outline: deep
prev: false
next: false
---

# Motorcomm Ethernet

## YT6801

Download the driver source code from the [product page](https://motor-comm.com/product/ethernet-control-chip) on the Motorcomm official website, extract it, and execute the script:

```bash
unzip yt6801-linux-driver-1.0.29.zip -d ./yt6801
cd yt6801

su # The installation script requires root user instead of sudo
sh ./yt_nic_install.sh
```

After installation, check if the kernel module is successfully loaded:
```bash
lsmod | grep yt6801
```