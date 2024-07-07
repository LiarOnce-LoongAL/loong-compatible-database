import yaml from "js-yaml"
import fs from "fs"
import { glob } from "glob"

// Fix __filename and __dirname in ESM
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

const json_template = {
    hardwares:[],
    lat: [],
    liblol: []
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

// console.log(json_template)
if(fs.existsSync(__dirname + "/datas.json") || fs.existsSync(__dirname + "/datas.min.json")){
    fs.rmSync(__dirname + "/datas.json")
    fs.rmSync(__dirname + "/datas.min.json")
}
fs.writeFileSync(__dirname + "/datas.json", JSON.stringify(json_template, null, "\t"))
fs.writeFileSync(__dirname + "/datas.min.json", JSON.stringify(json_template))