---
outline: deep
prev: false
next: false
---
# Intel Xe GPU

::: warning
Support for Intel discrete graphics cards is still in its early stages. Please follow upstream updates for further developments.
:::

## Xe Discrete Graphics (DG1) {#xe-dg1}

If you are using a new-world distribution (e.g., AOSC OS, ArchLinux for Loong) with Linux 6.8 or above on the LoongArch platform, you can use Intel Xe architecture discrete graphics cards at the system level.

If you are using a 3A5000-7A2000-EVB (Loongson 3A5000) or XA61200 (Loongson 3A6000) motherboard, you can choose to update the firmware from [here](https://github.com/loongson/Firmware/tree/main/MultiArchUefiSupport) to support displaying images in the BIOS interface and Grub boot interface.

Due to compatibility issues with the `i915` module on the LoongArch platform, it is necessary to force the use of the `xe` kernel module while keeping Mesa up to date.

Run the following command in the terminal:

```bash
lspci -nn | grep VGA
```

Then capture the hardware PCI ID and add the following kernel parameters:

```
i915.force_probe=!4905 xe.force_probe=4905
```

Here are the corresponding PCI IDs for the graphics cards:

| Graphics Card | PCI ID |
| ------------- | ------ |
| DG1 96EU      | 4905   |
| DG1 80EU      | 4908   |
| Arc A380      | 56a5   |
| Arc A580      | 56a2   |
| Arc A750      | 56a1   |
| Arc A770      | 56a0   |

## Arc A Series Graphics (DG2) {#arc-dg2}

Currently, there is significant performance degradation when using Arc A-Series GPUs on the LoongArch platform (e.g., glmark2 scores around 200). Please use them with caution in conjunction with the `xe` kernel module.
