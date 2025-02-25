---
outline: deep
prev: false
next: false
---
# Submission

## Submission Methods

Currently, you can choose from the following three methods to provide data:

1. Refer to the corresponding guide on the left based on the type, then fork [this repository](https://github.com/LiarOnce-LoongAL/loong-compatible-database), make your modifications, and initiate a PR to me.
2. Still following the guide above, copy the template content to fill in, then [create an issue here](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues).
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

Then [create an issue here](https://github.com/LiarOnce-LoongAL/loong-compatible-database/issues), there is no need to fill in the YAML content at this time, just submit the Probe URL.
