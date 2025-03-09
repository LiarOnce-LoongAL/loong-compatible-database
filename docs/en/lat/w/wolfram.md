---
outline: deep
prev: false
next: false
---
# Wolfram

Since the version 14.1, installation of Wolfram Mathematica was included in the installation of Wolfram. 

## Installation

Install it as on a usual x86/arm machine. 

## Modifying the scripts

Under the path to install (such as the normal installation path `/usr/local/Wolfram/Wolfram/14.2` for version 14.2), find the folder `Executables`, for all scripts in it (`math`, `MathKernel`, `mcc`, `wolfram`, `WolframKernel`, `wolframnb`, `WolframNB`), modify them as shown below:

at the beginning of those scripts

```bash
    ...
        case `uname -s` in
                Linux)
                        case `uname -m` in
                                i?86)
                                        SystemIDList="Linux";;
                                x86_64)
                                        if [ "${_SystemID}" = "Linux" ]; then
                                                SystemIDList="Linux Linux-x86-64"
                                        else
                                                SystemIDList="Linux-x86-64 Linux"
                                        fi;;
                                armv?l)
                                        SystemIDList="Linux-ARM";;
                                aarch64)
                                        SystemIDList="Linux-ARM64 Linux-ARM";;
                                loongarch64)
                                        SYstemIDList="Linux-x86_64 Linux";; 
                                *)
                                        SystemIDList="Unknown";;
                        esac;;
                *)
                        SystemIDList="Unknown";;
        esac
    ...
```

add a case for loongarch64, such as 

```bash
                                ...
                                aarch64)
                                        SystemIDList="Linux-ARM64 Linux-ARM";;
                                loongarch64)
                                        SystemIDList="Linux-x86-64 Linux";;
                                *)
                                        SystemIDList="Unknown";;
                                ...
```

after checking your `$PATH` includes `/usr/local/bin`, run `math` or `wolfram` in your console to launch Wolfram Cli interface. 

```bash
resbi@la464v:~ $ wolfram
Wolfram 14.2.0 Kernel for Linux x86 (64-bit)
Copyright 1988-2024 Wolfram Research, Inc.

In[1]:=   
```

## Problems 

### Wolfram Notebook

Run `WolframNB` or `wolframnb` in your console to launch Wolfram Notebook. But it meets problem when opening a new notebook, details are in https://github.com/deuso/latx-build/issues/25 .

## Compatibility

Only listing tested versions. 

| Version  | Release/Upgrade Date | Compatibility        | Notes                                                                |
| -------- | -------------------- | -------------------- | -------------------------------------------------------------------- |
| 14.2     | 2025.1.23            | <Compatible />       | Can't run Wolfram Notebook normally.                                 |
| 14.0     | 2024.1.9             | <Compatible />       | Cli interface runs normally, Wolfram Notebook wasn't been tested.    |
