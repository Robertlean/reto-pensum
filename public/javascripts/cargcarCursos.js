/* const courses = require('../data/curso')
const dataCourse = Object.values(courses) */

function cargarCursos (){
    fetch('curso1.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
}

cargarCursos()