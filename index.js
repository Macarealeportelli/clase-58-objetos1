// Ejercicio 1

const user = {
    firstName: "Macarena",
    lastName: "Reale Portelli",
    email: "macarenarealeportelli@gmail.com",
    age: 30,
}

console.log(`Hola, mi nombre es ${user.firstName} ${user.lastName} y tengo ${user.age} años`)

// Ejercicio 2

const usuario1 = {
    id: 1,
    nombre: 'Ada Lovelace',
    email: 'ada@gmail.com',
    telefono: 1234567890,
}

const usuario2 = {
    id: 2,
    nombre: 'Grace Cooper',
    email: 'grace@hotmail.com',
    telefono: 0987654321,
}

const usuario3 = {
    id: 3,
    nombre: 'Hedy Lamar',
    email: 'hedy@gmail.com',
    telefono: 6789054321,
}

const usuario4 = {
    id: 4,
    nombre: 'Radia Perlman',
    email: 'radia@yahoo.com',
    telefono: 1234509876,
}

const usuario5 = {
    id: 5,
    nombre: 'Sheryl Sandberg',
    email: 'sheryl@facebook.com',
    telefono: 5432167890,
}

console.log(usuario1)
console.log(usuario2)
console.log(usuario3)
console.log(usuario4)
console.log(usuario5)

//Ejercicio 3
console.log(usuario1.nombre)
console.log(usuario2.id)
console.log(usuario3.email)
console.log(usuario4.id, usuario4.nombre)
console.log(usuario5.telefono)


// Ejercicio 4

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
}

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)


// Ejercicio 5

const tecnologíasConocidas = ['HTML' , 'CSS' , 'JavaScript']

user.sabeProgramar = true
user.tecnologíasConocidas = tecnologíasConocidas

console.log(user)
