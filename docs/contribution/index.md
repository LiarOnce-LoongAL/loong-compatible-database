---
layout: doc
sidebar: false
outline: 'deep'
---
# 参与贡献

## 硬件

### 在填写硬件信息之前

请根据硬件本身的类型确认分类，否则我们不会接受提交。

在将硬件兼容性信息上传到本仓库之前，请先确认硬件具体是否兼容。

由于硬件种类繁多，该表可能无法做到及时更新，可在该代码找到目前允许收录的最新类型：

| 类型                 | `type` 对应值 |
| -------------------- | --------------- |
| 内存(UDIMM)          | Memory_UDIMM    |
| 内存(UDIMM/ECC)      | Memory_UDIMMECC |
| 内存(RDIMM)          | Memory_RDIMM    |
| 内存(SO-DIMM)        | Memory_SODIMM   |
| 显卡                 | GPU             |
| 有线网卡             | Ethernet        |
| 无线网卡             | Wireless        |
| 固态硬盘(SATA)       | SSD_SATA        |
| 固态硬盘(NVMe)       | SSD_NVMe        |
| 机械硬盘(SATA)       | HDD_SATA        |
| 其他存储类设备(SATA) | Storage_SATA    |
| 键盘                 | Keyboard        |
| 鼠标                 | Mouse           |
| 手柄控制器           | Gamepad         |
| 打印机               | Printer         |
| 扫描仪               | Scanner         |
| PCIe 扩展卡          | PCIe_Card       |
