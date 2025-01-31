---
outline: deep
prev: false
next: false
---
# Moore Threads GPU

## MTT S70 / MTT S80

:::danger
This tutorial is only applicable to old-world distributions. For new-world distributions, please wait for updates from the manufacturer.
This tutorial is compiled and shared for reference only. Use it at your discretion.
:::

:::warning
A reminder from the tutorial source:
There is a conflict with Loongnix and DDE. Installing the DDE with this specific kernel will cause a logout loop. It is preliminarily suspected that the Kylinsoft kernel prevents competitors from using it.
:::

Tutorial source: [https://www.bilibili.com/opus/868705187717447689](https://www.bilibili.com/opus/868705187717447689)

Modify the `/etc/apt/sources.list` file and add the repository address:

```text
deb [trusted=yes] https://oldt.revysr.cc/t/loongnix-moore/ sid main
```

After saving, execute `apt update`, then upgrade and install the specific kernel:

```bash
apt install linux-image-5.4.18-101-generic linux-modules-5.4.18-101-generic linux-modules-extra-5.4.18-101-generic
```

After installation, install musa:

```bash
apt install musa
```
