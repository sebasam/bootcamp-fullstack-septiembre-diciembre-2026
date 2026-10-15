const numeros = [1, 2, 3, 4, 5, 6]

const numerosPares = []
const numerosImpares = []

// console.log(arrayNumeros[3])

numeros.forEach(numero => {
    const resto = numero % 2
    if(resto == 0) {
        numerosPares.push(numero)
    } else {
        numerosImpares.push(numero)
    }
})

console.log(`Array de numeros pares`, numerosPares)
console.log(`Array de numeros impares`, numerosImpares)