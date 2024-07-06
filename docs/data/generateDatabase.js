import yaml from "js-yaml"
import fs from "fs"
import { glob } from "glob"

const json_template = {
    hardwares:[],
    lat: [],
    liblol: []
}

const hardwares = await glob("./hardwares/**.yml", {})
hardwares.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.hardwares.push(jsonResult)
})

const lat = await glob("./lat/**.yml", {})
lat.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.lat.push(jsonResult)
})

const liblol = await glob("./liblol/**.yml", {})
liblol.forEach(files => {
    let yamlFile = fs.readFileSync(files, 'utf-8')
    let jsonResult = yaml.load(yamlFile)
    json_template.liblol.push(jsonResult)
})

// console.log(json_template)
fs.writeFileSync("datas.json", JSON.stringify(json_template, null, "\t"))
fs.writeFileSync("datas.min.json", JSON.stringify(json_template))