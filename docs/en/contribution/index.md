---
layout: doc
sidebar: false
outline: 'deep'
---
# Starting contributing

**This document has been translated using DeepL, please improve if necessary!**

## Hardware

### Before entering the hardware information

Please confirm the classification based on the type of hardware itself, otherwise we will not accept the submission.

Before uploading hardware compatibility information to this repository, please confirm the hardware specifics.

After confirming the hardware, copy the template file `template_hardware.yml` to the specified hardware type in `/docs/data/hardwares`, where the template file can also be found.

This is a copy of the template file:

```yaml
model: 
brand: 
type: 
status: 
notes: 
notes_en:  # For english notes(if you have)
link: 
link_en:   # For english link(if you have)
```

**After filling out the file according to the template file, please make sure to modify the file name and store it in the specified folder according to the hardware type, otherwise we will not accept the submission. Regarding the rule that the file name needs to be according to the hardware type, the specific file naming will be explained below.**

**The following values are case sensitive**.

### model

The value to fill in the hardware specific model, different hardware types, the value is not the same, **do not required to fill in the brand information**, fill in the rules as shown in the table below:

| Hardware type                | Model                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Memory (All Interface Types) | The model number is located at the bar-code on the sticker of the memory stick, depending on the manufacturer it is usually located on the left or right side of the capacity and voltage timing information, if the memory stick belongs to one of the products' series, you can add the name of the series in front of the model number, for example,`HyperX ` (there is a space, you need to use a space to separate). |
| Graphics Card                | The name of the publicly available hardware, e.g.`Radeon RX 580`, with different SP versions in parentheses, e.g. `Radeon RX 580 (2048SP)`.                                                                                                                                                                                                                                                                             |
| Ethernet                     | The publicly available hardware names should indicate (`PCIe`) for PCIe and (`USB`) for USB.                                                                                                                                                                                                                                                                                                                            |
| Wireless                     | The publicly available hardware names should indicate (`PCIe`) for PCIe and (`USB`) for USB.                                                                                                                                                                                                                                                                                                                            |
| SATA SSD                     | Manufacturer's publicized model number for the hardware，e.g.`SC001 Active`。                                                                                                                                                                                                                                                                                                                                             |
| NVMe SSD                     | Manufacturer's publicized model number for the hardware，e.g.`SN750`。                                                                                                                                                                                                                                                                                                                                                    |
| SATA HDD                     | Manufacturer's publicized model number for the hardware，e.g.`ST4000DM004`，and add the HDD capacity at the end (e.g. `4TB`)。                                                                                                                                                                                                                                                                                          |
| SATA Storage                 | Manufacturer's publicized model number for the hardware，e.g.`BC-12D2HT`                                                                                                                                                                                                                                                                                                                                                  |
| Keyboard                     | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| Mouse                        | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| Gamepad                      | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| Printer                      | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| Scanner                      | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| All-in-One Printer           | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| PCIe Card                    | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |
| USB Devices                  | Manufacturer's publicized model number for the hardware.                                                                                                                                                                                                                                                                                                                                                                    |

### brand

This value is only filled in by the manufacturer to which the hardware belongs, and **all must be filled in using English**.

The English names of some of the manufacturers are provided here for reference in no particular order:

| Brand English Name<br />(`brand` value) | Notes                                                                                              |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ZHITAI/YMTC                               | For the products of YMTC, all the products here are filled with `ZHITAI/YMTC`                    |
| CXMT                                      |                                                                                                    |
| JHICC                                     |                                                                                                    |
| ADATA                                     |                                                                                                    |
| Colorful                                  |                                                                                                    |
| longsys/FORESEE                           | For the products of longsys, fill in `longsys/FORESEE` here (including memory sticks and SSDs). |
| UniIC                                     |                                                                                                    |
| Samsung                                   |                                                                                                    |
| Solidigm/SK Hynix                         | For the products of SK Hynix, fill in `Solidigm/SK Hynix` (including memory sticks and SSDs).   |
| Quanxing                                  |                                                                                                    |
| Corsair                                   |                                                                                                    |
| Crucial/Micron                            | For the products of Micron, fill in `Crucial/Micron` here.                                       |
| Gloway                                    |                                                                                                    |
| KingBank                                  |                                                                                                    |
| Motorcomm                                 |                                                                                                    |
| MUCSE                                     |                                                                                                    |
| Kioxia                                    |                                                                                                    |
| Toshiba                                   |                                                                                                    |
| Western Digital                           |                                                                                                    |
| Sandisk                                   |                                                                                                    |
| AMD                                       |                                                                                                    |
| Intel                                     |                                                                                                    |
| NVIDIA                                    | Since Mellanox was acquired by NVIDIA, all Mellanox products are owned by NVIDIA.                  |

### type

This value is filled in with the hardware type, which is shown in the table below.

Due to the wide variety of hardware types, the table may not be up to date, so you can find the latest types that are currently allowed to be included in this code and fill them into `type`:

| Type               | `type` value  | Notes                                                                                                                                            |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Memory UDIMM       | Memory_UDIMM    | General consumer-grade memory sticks, commonly found on desktop platforms.                                                                       |
| Memory UDIMM/ECC   | Memory_UDIMMECC | Generic consumer-grade memory sticks, but with ECC functionality, commonly found in workstations with consumer-grade or server-grade processors. |
| Memory RDIMM       | Memory_RDIMM    | Memory sticks containing registers, known as ECC REG, are commonly found in server platforms.                                                    |
| Memory SO-DIMM     | Memory_SODIMM   | General consumer-grade memory sticks, commonly found in laptop platforms.                                                                        |
| Graphics Card      | GPU             |                                                                                                                                                  |
| Ethernet           | Ethernet        | PCIe NICs and USB NICs are included here.                                                                                                        |
| Wireless           | Wireless        | PCIe NICs and USB NICs are included here.                                                                                                        |
| SATA SSD           | SSD_SATA        | SSDs that use the SATA 7+15 interface in a 2.5” form factor, or use the M.2 B+M key (two notches) with the SATA logo on the sticker.            |
| NVMe SSD           | SSD_NVMe        | All other hard disks using the NVMe protocol, regardless of interface (including M.2, U.2, U.3, E1.S, E3.S, E1.L interfaces).                    |
| SATA HDD           | HDD_SATA        | HDD in a 2.5“ or 3.5” form factor using the SATA 7+15 interface, excluding products using the SAS.                                             |
| SATA Storage       | Storage_SATA    | Other storage devices using the SATA 7+15 interface, such as optical drives, tape drives, etc.                                                   |
| Keyboard           | Keyboard        |                                                                                                                                                  |
| Mouse              | Mouse           |                                                                                                                                                  |
| Gamepad            | Gamepad         | Various gamepads.                                                                                                                                |
| Printer            | Printer         | This represents only printers with a single printing function.                                                                                   |
| Scanner            | Scanner         | This represents only scanners with a single scanning function                                                                                    |
| All-in-One Printer | Printer_AIO     | This only means MFPs that support printing, copying, scanning, faxing, etc.                                                                      |
| PCIe Card          | PCIe_Card       | All hardware types other than those listed above**that use the PCIe** fall under this category, such as HBA cards.                         |
| USB Devices        | USB_Device      | All hardware types other than those listed above**that use the USB** fall under this category.                                             |

### status

Fill in the current compatibility status of the hardware, here are integers (not strings), the value and the corresponding relationship as shown in the table below:

| Number | Equivalent value    |
| ------ | ------------------- |
| 0      | Unknown             |
| 1      | Compatible          |
| 2      | Partial Support     |
| 3      | New-world Available |
| -1     | Unsupported         |

### notes

A short note of information to note about this hardware.

It can be filled in here with the Chinese product information.

**Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key `notes_en` here.**

For other types of hardware devices, you need to note the type of hardware here, such as optical drives, HBA cards, capture cards, etc., which may be subdivided in the future.

If the content is too long, or if it is necessary to explain in a long text, please write it as a document and fill in the document address in the `link`.

### link

If the hardware requires formal documentation for compatibility, please store the Markdown file under `/docs/hardwares/`.

For hardware, we recommend naming it after its kernel module under Linux, e.g. a modern Intel wireless card would be named `iwlwifi.md`.

**Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key `link_en` here.**

The value is then filled out in the following format (**Please note that the file name cannot be in Chinese, please use full English**):

```yaml
/hardwares/<markdown file name>
```

The document is then displayed in the specified location as directed [here](#external-docs).

### Final file naming and storage location

For file naming and locations, please refer to the table below:

| Hardware type                | Nomenclature                                                                                                                                                                                                                                                                                                                   | Location         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| Memory (All Interface Types) | The specific model number on the sticker information provided on the product itself,`<model>.yml`，same value as `model`.                                                                                                                                                                                                  | `Memory`       |
| Graphics card                | `<model abbreviation>.yml`. For example, for `Radeon RX 6400`, simply name `rx6400.yml`.                                                                                                                                                                                                                                 | `GPU`          |
| Ethernet                     | `<model abbreviation>.yml`                                                                                                                                                                                                                                                                                                   | `Ethernet`     |
| Wireless                     | `<model abbreviation>.yml`，For example, for `Intel Wi-Fi 6 AX210`, simply name `ax210.yml`.                                                                                                                                                                                                                             | `Wireless`     |
| SATA SSD                     | A shorthand for the manufacturer's outwardly advertised model number for this hardware,`<model>.yml`, For example, `ZHITAI SC001 Active`, just name `sc001.yml`, if the prefix is the same, then you need to add extra suffix to differentiate, for example, `ZHITAI SC001 XT`, then you need to name `sc001xt.yml`. | `SSD_SATA`     |
| NVMe SSD                     | A shorthand for the manufacturer's outwardly advertised model number for this hardware,`<model>.yml`, For example, `Western Digital SN750 `, simply name it `sn750.yml `, with the same caveats as for `SATA SSD`.                                                                                                     | `SSD_NVME`     |
| SATA HDD                     | A shorthand for the manufacturer's outwardly advertised model number for this hardware,`<model>.yml`, For example, `Seagate ST4000DM004`, you need to name `ST4000DM004.yml` with the same value as `model`.                                                                                                           | `HDD_SATA`     |
| SATA Storage                 | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Storage_SATA` |
| Keyboard                     | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Keyboard`     |
| Mouse                        | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Mouse`        |
| Gamepad                      | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Gamepad`      |
| Printer                      | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Printer`      |
| Scanner                      | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Scanner`      |
| All-in-One Printer           | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `Printer_AIO`  |
| PCIe Card                    | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `PCIe_Card`    |
| USB Devices                  | Manufacturer's externally advertised model number for this hardware,`<model>.yml`, same value as `model`.                                                                                                                                                                                                                  | `USB_Device`   |

## LAT

### Start

Copy the template file `template_lat.yml` to `/docs/data/lat` and store it according to the first letter of the software, or in the `0to9` folder if it starts with a number.

This is the content of a template file:

```yaml
name: 
vendor: 
version: 
lat_version: 
latx_or_lata: 
date: 
status: 
notes: 
link: 
```

### name

Fill in the name of the software here, in any language.

### vendor

Fill in the name of the vendor here, **only English**.

### version

Fill in the running version of the software here.

### lat_version

Fill in here the version of the LAT runtime library used to run the software, an example is:

```yaml
1.5.2-rc1
```

If the software is from Windows, you also need to fill in the Wine runtime library version, for example:

```yaml
1.5.2-rc1 + wine-9.9-staging
```

### latx_or_lata

The runtime library used to run the software should refer to the current architecture of the software, `LATX` if it is the x86 version, `LATA` if it is the ARM version.

### date

The update date of the software.

If there is more than one version please fill in `1` and create a new Markdown document to describe it.

### status

Fill in the current compatibility status of the software, here are integers (not strings), the value and the corresponding relationship as shown in the table below:

| Number | Equivalent value |
| ------ | ---------------- |
| 0      | Unknown          |
| 1      | Compatible       |
| 2      | Partial Support  |
| 3      | Native Available |
| -1     | Unsupported      |

### notes

A short note about the software that requires attention.

**Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key `notes_en` here.**

If the content is too long, or if it is necessary to explain it in a long text, please write it as a document and put the address of the document in the `link` field.

### link

If the software requires formal documentation for compatibility, store Markdown files under `/docs/lat/`.

**Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key `link_en` here.**

The value should be filled in the following format (**Please note that the file name cannot be in Chinese, please use full English**):

```yaml
/lat/<markdown file name>
```

The document is then displayed in the specified location as directed [here](#external-docs).

## LibLoL

### Start

Copy the template file `template_liblol.yml` to `/docs/data/liblol` and store it according to the first letter of the software, or under the `0to9` folder if it starts with a number.

This is the content of a template file:

```yaml
id: 
name: 
vendor: 
version: 
liblol_version: 
date: 
status: 
notes: 
link: 
```

### id

Here is the ID of the software, if from LoongApps(app.loongapps.cn), please fill in the ID of it, if not from LoongApps, then start from 10001.

### name

Fill in the name of the software here, in any language.

### vendor

Fill in the name of the vendor here, **only English**.

### version

Fill in the running version of the software here.

### liblol_version

Fill in here the version of LibLoL runtime library used to run the software, the example is: `0.1.5`.

### date

The date the software was updated, if you don't know the exact time just write the year, month and day (YYYY-MM-DD).

### status

Fill in the current compatibility status of the software, here are integers (not strings), the value and the corresponding relationship as shown in the table below:

| Number | Equivalent value    |
| ------ | ------------------- |
| 0      | Unknown             |
| 1      | Compatible          |
| 2      | Partial Support     |
| 3      | New-world Available |
| -1     | Unsupported         |

### notes

Short note information to note about this software.

**If the application is obtained from LoongApps, please note here: `From LoongApps`**.

**Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key `notes_en` here.**

If the content is too long or needs to be explained in a long text, please write it as a document and fill in the document address in `link`.

### link

If the software requires formal documentation for compatibility, please store Markdown files under `/docs/liblol/`.

Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key `link_en` here.

The value should be filled in the following format (**Please note that the file name cannot be in Chinese, please use full English**):

```yaml
/liblol/<markdown file name>
```

The document is then displayed in the specified location as directed [here](#external-docs).

## External Documents

If the hardware or software requires formal documentation for compatibility, please modify the file according to the following:

First go to `/docs/.vitepress/config_files/sidebar_<hardwares|lat|liblol>.js` and fill in the link address and title of the document according to the type, an example is shown below:

```js
{ text: '<Document Title>', link: '<Document Link>' }
```

where `link` has the same value as `link` in the `.yml` file.
