const path = require('path');
const fs = require("fs");

const array =[];
const courses = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/curso1.json"), "utf-8"));
const dataCourse = Object.values(courses)



module.exports = {
    index: (req, res) => { 
        console.log(courses)
        console.log(dataCourse[1])   
        res.render('index', { title: 'Inicio',  cursos: courses })
    },
    muestra :(req, res) => res.render('course', {title: 'Muestra'})
    
}