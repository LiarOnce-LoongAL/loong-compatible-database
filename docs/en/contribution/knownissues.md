---
layout: doc
sidebar: false
outline: 'deep'
---
# Known Issues

## Hardware

### Why are some hardware types not available {#why-are-some-hardware-types-not-available}

If the hardware you need to submit is not included in the known types, then if it's USB or PCIe, please submit it after categorizing it to the corresponding type, if it's not these two types of interfaces, then you can raise an issue and add it after discussion.

For hardware with HDD, please note that we won't accept data for SAS HDD, as the current LoongArch platform doesn't provide SAS for motherboards, and we believe that support for SAS HDD should be dependent on the RAID card and the HBA card rather than the platform itself.
