import yaml from "js-yaml"
import fs from "fs"
import { glob } from "glob"

// Fix __filename and __dirname in ESM
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { type } from "os"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

const json_template = {
    hardwares:[],
    lat: [],
    liblol: []
}

const locale_template = {
    zh: {},
    en: {}
}

const glob_options = {
    ignore: ['**/template*.yml']
}

const hardwares = await glob(__dirname + "/hardwares/**/*.yml", glob_options)
hardwares.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.hardwares.push(jsonResult)
})

const lat = await glob(__dirname + "/lat/**/*.yml", glob_options)
lat.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.lat.push(jsonResult)
})

const liblol = await glob(__dirname + "/liblol/**/*.yml", glob_options)
liblol.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.liblol.push(jsonResult)
})

// Generate locales
locale_template.zh = JSON.parse(fs.readFileSync(__dirname + "/locales/zh.json"))
locale_template.en = JSON.parse(fs.readFileSync(__dirname + "/locales/en.json"))
// End

// console.log(json_template)
if(fs.existsSync(__dirname + "/datas.json") || fs.existsSync(__dirname + "/datas.min.json")){
    fs.rmSync(__dirname + "/datas.json")
    fs.rmSync(__dirname + "/datas.min.json")
}
fs.writeFileSync(__dirname + "/datas.json", JSON.stringify(json_template, null, "\t"))
fs.writeFileSync(__dirname + "/datas.min.json", JSON.stringify(json_template))
fs.writeFileSync(__dirname + "/locales.min.json", JSON.stringify(locale_template))