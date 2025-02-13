---
sidebar: true
layout: doc
aside: false
prev: false
next: false
---
# Starting contributing

**This document has been translated using DeepL, please improve if necessary!**

## External Documents

If the hardware or software requires formal documentation for compatibility, please modify the file according to the following:

First go to `/docs/.vitepress/config_files/sidebar_<hardwares|lat|liblol>.js` and fill in the link address and title of the document according to the type, an example is shown below:

```js
{ text: '<Document Title>', link: '<Document Link>' }
```

where `link` has the same value as `link` in the `.yml` file.
