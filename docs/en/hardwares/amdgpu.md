---
outline: deep
prev: false
next: false
---
# AMD GPU

## Power management issues

Due to the imperfect sleep methods of the LoongArch platform, in order to ensure performance, AMD GPUs need to disable the dynamic power-off function and Active State Power Management (ASPM):

```
amdgpu.runpm=0 pcie_aspm=off 
```

## GCN 1 & GCN 2

Since the kernel modules `radeon` and `amdgpu` both support these two generations of graphics cards, the additional Linux kernel parameters are:

```
amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0
```

## GCN 4 (Polaris)

The additional Linux kernel parameters are:

```
amdgpu.dpm=1
```

Previously, there were compatibility issues between the LoongArch platform and the AMD Polaris GPUs. However, after replacing the 7A2000 bridge chip with a fan-equipped heatsink and updating to the latest BIOS, stability has significantly improved. In this case, DPM (`amdgpu.dpm=1`) needs to be enabled. Additionally, this issue has been resolved in AOSC OS and Deepin by using the latest kernel, but the corresponding patch has not been merged upstream for some reason. If you need to use AMD Polaris GPUs, please use a new-world distribution and update to the latest kernel with the applied fix.

## RDNA

The LoongArch platform can already use AMD RDNA architecture graphics cards at the system level when using a new-world distribution. If you are using a 3A5000-7A2000-EVB (Loongson 3A5000) or XA61200 (Loongson 3A6000) motherboard, you can choose to update the firmware from [here](https://github.com/loongson/Firmware/tree/main/MultiArchUefiSupport) to support displaying images in the BIOS interface and Grub boot interface without waiting until the system boots.
