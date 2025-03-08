---
outline: deep
prev: false
next: false
---
# Wolfram

自 14.1 版本后, Wolfram Mathematica 的安装被包含在了 Wolfram 的安装中, 官方也以 Wolfram 的名字描述之. 

## 安装

照常运行安装程序并按要求配置安装路径即可

## 修改启动脚本

在安装路径下 (如版本 14.2 的默认安装路径`/usr/local/Wolfram/Wolfram/14.2`), 找到 `Executables` 文件夹, 对其中的脚本文件 (`math`, `MathKernel`, `mcc`, `wolfram`, `WolframKernel`, `wolframnb`, `WolframNB`) 做如下相同的更改:

在脚本开头处

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

往aarch64的case后面 (其实加在前面也可以) 添加一个loongarch64的case, 如: 

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

在确保已经将 `/usr/local/bin` 添加到 `$PATH` 环境变量中后, 在终端里运行 `math` 或 `wolfram` 脚本即可启动 Wolfram 的cli交互界面. 

```bash
resbi@la464v:~ $ wolfram
Wolfram 14.2.0 Kernel for Linux x86 (64-bit)
Copyright 1988-2024 Wolfram Research, Inc.

In[1]:=   
```

## 兼容问题

### Wolfram Notebook 无法运行

运行 `WolframNB` 或 `wolframnb` 即可启动 Wolfram Notebook. 但是在打开 Notebook 界面时报错, 详见 https://github.com/deuso/latx-build/issues/25 .

## 兼容情况

此处仅列出我测试过的版本

| 版本  | 发布/更新日期 | 兼容情况        | 备注                                              |
| ----- | ------------ | -------------- | ------------------------------------------------- |
| 14.2  | 2025.1.23    | <Compatible /> | cli模式可正常使用, Wolfram Notebook 无法启动        |
| 14.0  | 2024.1.9     | <Compatible /> | cli模式可正常使用, Wolfram Notebook 未测试          |
