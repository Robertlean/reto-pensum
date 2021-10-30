const courses = require('../data/curso')
const courseJson = require('../data/curso1.json')

let nameCourse = Object.keys(courses)
let contentCourse = Object.values(courses)

module.exports = {
    index: (req, res) => { 
/*         console.log(coursesJson) */
        console.log(contentCourse[1].link)
        console.log(nameCourse[1])
        res.render('index', { title: 'Inicio',  cursos: contentCourse, name: nameCourse })
    },
    muestra :(req, res) => res.render('course', {title: 'Muestra'})
    
}