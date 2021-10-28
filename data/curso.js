const path = require('path');
const fs = require("fs");

module.exports = courses = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/curso1.json"), "utf-8"));