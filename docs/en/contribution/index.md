---
sidebar: true
layout: doc
aside: false
prev: false
next: false
---
# Starting contributing

**This document has been translated using DeepL, please improve if necessary!**


## Submission Methods

Currently, you can choose from the following three methods to provide data:

1. Refer to the corresponding guide on the left based on the type, then fork [this repository](https://github.com/LiarOnce-LoongAL/loong-compatible-database), make your modifications, and initiate a PR to me.
2. [create an issue here](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues). choose a appropriate form template, following the description to fill and submit the issue 
3. (**For Hardware Info**) Use the `hw-probe` tool to execute the following command:

> **Note: hw-probe will also upload the collected logs, please consider this method accordingly**

```bash
sudo hw-probe -all -upload

# You will get the following output
Probe for hardware ... Ok
Reading logs ... Ok
Uploaded to DB, Thank you!

Probe URL: https://linux-hardware.org/?probe=(generated id)
```

Then [create an issue here](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues), select the `(Markdown) 添加硬件信息 / Add Hardware Info` template and submit the Probe URL.


## External Documents

If you fork/editing the repository and the hardware or software requires formal documentation for compatibility, please modify the file according to the following:

First go to `/docs/.vitepress/config_files/sidebar_<hardwares|lat|liblol>.js` and fill in the link address and title of the document according to the type, an example is shown below:

```js
{ text: '<Document Title>', link: '<Document Link>' }
```

where `link` has the same value as `link` in the `.yml` file.
