---
outline: deep
prev: false
next: false
---
# NVIDIA 显卡

## Fermi & Kepler

下表展示型号在其他平台使用 `nouveau` 驱动的情况下兼容性良好，可自行测试。

| Fermi                               | Kepler                      |
| ----------------------------------- | --------------------------- |
| GeForce  GTX 590                    | GeForce GTX TITAN Z         |
| GeForce  GTX 580                    | GeForce GTX TITAN BLACK     |
| GeForce  GTX 570                    | GeForce GTX TITAN           |
| GeForce  GTX 560                    | GeForce GTX 780             |
| GeForce  GTX 560 Ti                 | GeForce GTX 780 Ti          |
| GeForce  GTX 560 Ti Limited Edition | GeForce GTX 770             |
| GeForce  GTX 560 SE                 | GeForce GTX 760             |
| GeForce  GTX 555                    | GeForce GTX 760 Ti          |
| GeForce  GTX 550 Ti                 | GeForce GT 740              |
| GeForce  GTX 480                    | GeForce GT 730              |
| GeForce  GTX 470                    | GeForce GT 720              |
| GeForce  GTX 465                    | GeForce GT 710              |
| GeForce  GTX 460                    | GeForce GTX 690             |
| GeForce  GTX 460 SE                 | GeForce GTX 680             |
| GeForce  GTS 450                    | GeForce GTX 670             |
| GeForce  GT 730 (GF108)             | GeForce GTX 660             |
| GeForce  GT 705                     | GeForce GTX 660 Ti          |
| GeForce  GT 645                     | GeForce GTX 650             |
| GeForce  GT 640(GF116)              | GeForce GTX 650 Ti          |
| GeForce  GT 630(GF108)              | GeForce GTX 650 Ti Boost    |
| GeForce  GT 620                     | GeForce GTX 645             |
| GeForce  GT 610                     | GeForce GT 640              |
| GeForce  605                        | GeForce GT 635              |
| GeForce  GT 545                     | GeForce GT 630(GK107/GK208) |
| GeForce  GT 530                     |                             |
| GeForce  GT 520                     |                             |
| GeForce  510                        |                             |
| GeForce  GT 440                     |                             |
| GeForce  GT 430                     |                             |
| GeForce  GT 420                     |                             |

## Maxwell & Pascal

使用 Nouveau 驱动兼容性不佳，包含以下型号：

| Maxwell             | Pascal                                |
| ------------------- | ------------------------------------- |
| GeForce GTX TITAN X | TITAN X (Pascal)                      |
| GeForce GTX 980     | TITAN Xp (Pascal)                     |
| GeForce GTX 980 Ti  | TITAN Xp Collector's Edition (Pascal) |
| GeForce GTX 970     | GeForce GTX 1080                      |
| GeForce GTX 960     | GeForce GTX 1080 Ti                   |
| GeForce GTX 950     | GeForce GTX 1070                      |
| GeForce GTX 745     | GeForce GTX 1070 Ti                   |
| GeForce GTX 750     | GeForce GTX 1060(6GB)                 |
| GeForce GTX 750 Ti  | GeForce GTX 1060(5GB)                 |
|                     | GeForce GTX 1060(3GB)                 |
|                     | GeForce GTX 1050(2GB)                 |
|                     | GeForce GTX 1050(3GB)                 |
|                     | GeForce GTX 1050 Ti                   |
|                     | GeForce GT 1030                       |
|                     | GeForce GT 1010                       |

## 开源驱动 {#open-source-driver}

由于无法确认官方开源版本驱动的兼容性，在开源版本驱动达到确实可用之前，以下型号均标记为不兼容：

| Turing                 | Ampere              | Ada Lovelace              |
| ---------------------- | ------------------- | ------------------------- |
| TITAN RTX              | GeForce RTX 3090    | GeForce RTX 4090          |
| GeForce RTX 2080       | GeForce RTX 3090 Ti | GeForce RTX 4090D         |
| GeForce RTX 2080 Ti    | GeForce RTX 3080    | GeForce RTX 4080          |
| GeForce RTX 2080 SUPER | GeForce RTX 3080 Ti | GeForce RTX 4080 SUPER    |
| GeForce RTX 2070       | GeForce RTX 3070    | GeForce RTX 4070          |
| GeForce RTX 2070 SUPER | GeForce RTX 3070 Ti | GeForce RTX 4070 SUPER    |
| GeForce RTX 2060       | GeForce RTX 3060    | GeForce RTX 4070 Ti       |
| GeForce RTX 2060 SUPER | GeForce RTX 3060 Ti | GeForce RTX 4070 Ti SUPER |
| GeForce RTX 2060(12GB) | GeForce RTX 3050    | GeForce RTX 4060          |
| GeForce GTX 1660       |                     | GeForce RTX 4060 Ti       |
| GeForce GTX 1660 Ti    |                     |                           |
| GeForce GTX 1660 SUPER |                     |                           |
| GeForce GTX 1650       |                     |                           |
| GeForce GTX 1650 SUPER |                     |                           |
| GeForce GTX 1630       |                     |                           |