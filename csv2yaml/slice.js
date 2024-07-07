import fs from "fs"

let reg = new RegExp("-\n")
let str = fs.readFileSync("memorydata.yml").toString().split(reg)
for (let i = 0; i < str.length; i++) {
    let filename = Math.floor(Math.random() * 10000)
    fs.writeFileSync("result/" + filename + ".yml", str[i])
}