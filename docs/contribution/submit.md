---
outline: deep
prev: false
next: false
---
# 提交

### 提交方式

目前可以选择以下三种方式提供数据：

1. 根据类型查看左侧对应的指引，之后 fork 一份[本仓库](https://github.com/LiarOnce-LoongAL/loong-compatible-database)，修改完毕后向我发起一个PR
2. 还是根据上一条的指引，复制模板内容填写，然后[在这里](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues)发起一份issue
3. (**仅针对硬件信息**) 通过 `hw-probe` 工具执行以下命令：

> **注意：hw-probe 会将收集到的日志也一并上传，请酌情考虑该方式**

```bash
sudo hw-probe -all -upload

# 将会得到以下输出
Probe for hardware ... Ok
Reading logs ... Ok
Uploaded to DB, Thank you!

Probe URL: https://linux-hardware.org/?probe=(生成的id)
```

然后[在这里](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues)发起一个issue，此时不需要填写 YAML 内容，提交 Probe URL 即可
