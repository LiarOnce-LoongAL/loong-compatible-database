---
outline: deep
prev: false
next: false
---
# LibLoL Information

## Start

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

## id

Here is the ID of the software, if from LoongApps(app.loongapps.cn), please fill in the ID of it, if not from LoongApps, then start from 10001.

## name

Fill in the name of the software here, in any language.

## vendor

Fill in the name of the vendor here, **only English**.

## version

Fill in the running version of the software here.

## liblol_version

Fill in here the version of LibLoL runtime library used to run the software, the example is: `0.1.5`.

## date

The date the software was updated, if you don't know the exact time just write the year, month and day (YYYY-MM-DD).

## status

Fill in the current compatibility status of the software, here are integers (not strings), the value and the corresponding relationship as shown in the table below:

| Number | Equivalent value    |
| ------ | ------------------- |
| 0      | Unknown             |
| 1      | Compatible          |
| 2      | Partial Support     |
| 3      | New-world Available |
| -1     | Unsupported         |

## notes

Short note information to note about this software.

**If the application is obtained from LoongApps, please note here: `From LoongApps`**.

**Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key `notes_en` here.**

If the content is too long or needs to be explained in a long text, please write it as a document and fill in the document address in `link`.

## link

If the software requires formal documentation for compatibility, please store Markdown files under `/docs/liblol/`.

Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key `link_en` here.

The value should be filled in the following format (**Please note that the file name cannot be in Chinese, please use full English**):

```yaml
/liblol/<markdown file name>
```

The document is then displayed in the specified location as directed [here](#external-docs).
