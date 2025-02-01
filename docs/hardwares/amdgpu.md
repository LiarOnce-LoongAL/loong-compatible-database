---
outline: deep
prev: false
next: false
---
# AMD 显卡 (AMDGPU)

## 电源管理问题

由于龙芯平台休眠机制不完善，为保证性能使用 AMD 显卡均需关闭动态断电功能和主动状态电源管理(ASPM):

```
amdgpu.runpm=0 pcie_aspm=off 
```

## GCN 1 & GCN 2

由于内核模块 `radeon` 和 `amdgpu` 同时支持这两代显卡，附带 Linux 内核参数为:

```
amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0
```

## GCN 4 (Polaris)

附带 Linux 内核参数为:

```
amdgpu.dpm=1
```

原先因龙芯平台与 AMD Polaris 架构的兼容性问题，但实测为 7A2000 桥片更换带有风扇的散热器并配合最新 BIOS 后稳定性大幅度提升，此时需开启 DPM(`amdgpu.dpm=1`)，且在 AOSC OS 和 Deepin 中使用最新内核后该问题已解决，但上游因某种原因未同意合并对应补丁，若需使用 AMD Polaris 架构的显卡请使用新世界发行版并更新到应用有修复补丁的最新内核。

## RDNA

龙芯平台在使用新世界发行版时就已经可以在系统层面中使用 AMD RDNA 架构的显卡，如果您使用的是 3A5000-7A2000-EVB(龙芯3A5000) 或 XA61200(龙芯3A6000) 主板，则可以选择更新[这里](https://github.com/loongson/Firmware/tree/main/MultiArchUefiSupport)的固件以支持在包括 BIOS 界面和 Grub 引导界面中显示画面而无需等待直至进入系统。
