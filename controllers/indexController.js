const courses = require('../data/curso')

let nameCourse = Object.keys(courses)
let contentCourse = Object.values(courses)

function recorrido() {
    for (let n = 0; n < nameCourse.length; n++) {
        console.log('-------------------------');
        console.log(nameCourse[n]+"\n")
        contentCourse[n].requires.forEach(requires => {
            console.log(requires)
        })
        
    }
   
}

module.exports = {
    index: (req, res) => { 
        recorrido()
        res.render('index', { title: 'Inicio',  cursos: contentCourse, name: nameCourse })
    },
    muestra :(req, res) => res.render('course', {title: 'Muestra'})
    
}