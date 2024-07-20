---
outline: deep
prev: false
next: false
---
# AMDGPU

## GCN 1 & GCN 2

Since the kernel modules `radeon` and `amdgpu` support both of graphics cards, the included Linux kernel parameters are:

```
amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0 pcie_aspm=off
```

## GCN 4 (Polaris)

The included Linux kernel parameters are:

```
amdgpu.dpm=1 pcie_aspm=off
```

Originally due to the compatibility issue of the LoongArch platform with AMD Polaris, but the stability has been greatly improved after replacing the heatsink with a fan for the 7A2000 with the latest BIOS, which needs to be turned on DPM (`amdgpu.dpm=1`), and the problem has been solved by using the newest kernel in AOSC OS and Deepin, but the upstream has not agreed to merge the patches for some reasons.

So please use new-world distros and update to the latest kernel with the fixes applied if you need to use AMD Polaris graphics cards.
