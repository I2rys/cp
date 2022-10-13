"use strict";

// Dependencies
const _ = require("lodash")
const fs = require("fs")

// Variables
const args = process.argv.slice(2)

// Main
if(!args.length) return console.log("usage: node index.js <inputFile> <outputFile>")
if(!args[1]) return console.log("outputFile is empty.")

var data = fs.readFileSync(args[0], "utf8").replace(/\r/g, "")
data = _.uniq(data.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+:[a-zA-Z-0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g))

if(!data.length) return console.log("No accounts found.")

console.log(`${data.length} accounts found.`)

fs.writeFileSync(args[1], data.join("\n"), "utf8")
console.log("Finished.")