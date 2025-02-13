---
outline: deep
prev: false
next: false
---
# LAT Information

## Start

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

## name

Fill in the name of the software here, in any language.

## vendor

Fill in the name of the vendor here, **only English**.

## version

Fill in the running version of the software here.

## lat_version

Fill in here the version of the LAT runtime library used to run the software, an example is:

```yaml
1.5.2-rc1
```

If the software is from Windows, you also need to fill in the Wine runtime library version, for example:

```yaml
1.5.2-rc1 + wine-9.9-staging
```

## latx_or_lata

The runtime library used to run the software should refer to the current architecture of the software, `LATX` if it is the x86 version, `LATA` if it is the ARM version.

## date

The update date of the software.

If there is more than one version please fill in `1` and create a new Markdown document to describe it.

## status

Fill in the current compatibility status of the software, here are integers (not strings), the value and the corresponding relationship as shown in the table below:

| Number | Equivalent value |
| ------ | ---------------- |
| 0      | Unknown          |
| 1      | Compatible       |
| 2      | Partial Support  |
| 3      | Native Available |
| -1     | Unsupported      |

## notes

A short note about the software that requires attention.

**Please note that the keys here only support Chinese, if you need to write in other languages here (e.g. English), please add the additional key `notes_en` here.**

If the content is too long, or if it is necessary to explain it in a long text, please write it as a document and put the address of the document in the `link` field.

## link

If the software requires formal documentation for compatibility, store Markdown files under `/docs/lat/`.

**Please note that the key here only supports pointing to Chinese documents, if you need to point to documents written in other languages (e.g. English), please add the additional key `link_en` here.**

The value should be filled in the following format (**Please note that the file name cannot be in Chinese, please use full English**):

```yaml
/lat/<markdown file name>
```

The document is then displayed in the specified location as directed [here](#external-docs).
