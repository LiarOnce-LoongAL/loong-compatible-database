---
outline: deep
prev: false
next: false
---
# AMDGPU

## GCN 1 & GCN 2

由于内核模块 `radeon` 和 `amdgpu` 同时支持这两代显卡，附带 Linux 内核参数为:

```
amdgpu.si_support=1 radeon.si_support=0 amdgpu.cik_support=1 radeon.cik_support=0 amdgpu.sg_display=0 pcie_aspm=off
```

## GCN 4 (Polaris)

附带 Linux 内核参数为:

```
amdgpu.dpm=1 pcie_aspm=off
```

原先因龙芯平台与 AMD Polaris 架构的兼容性问题，但实测为 7A2000 桥片更换带有风扇的散热器并配合最新 BIOS 后稳定性大幅度提升，此时需开启，且在 AOSC OS 和 Deepin 中使用最新内核后该问题已解决，但上游因某种原因未同意合并对应补丁，若需使用 AMD Polaris 架构的显卡请使用新世界发行版并更新到应用有修复补丁的最新内核。
