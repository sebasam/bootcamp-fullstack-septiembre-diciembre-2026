// const usuario = {
//     nombre: 'Juan Amaya',
//     edad: 33
// }

// console.log(usuario.nombre)

// usuario.nombre = 'Otro nombre'

const body = document.querySelector('body')

const usuarios = [
    { nombre: 'Juan Amaya', edad: 33 },
    { nombre: 'Mario Paiba', edad: 20 },
    { nombre: 'Santiago Herrera', edad: 25 },
    { nombre: 'Victor Franco', edad: 28 },
    { nombre: 'Yenny Ruiz', edad: 27 }
]

usuarios.forEach(usuario => {
    body.innerHTML += `<h1>${ usuario.nombre }</h1>`
})