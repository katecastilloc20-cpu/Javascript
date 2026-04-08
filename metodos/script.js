

//  let productos = []
//  let prod1 = prompt ("ingrese el producto 1")
//   let prod2 = prompt ("ingrese el producto 1")
//  let prod3 = prompt ("ingrese el producto 1")

// productos.push(prod1, prod2, prod3)

// console.log(productos)


// let notas = []

// let nota1 = Number(prompt("dime la nota 1"))
// let nota2 = Number(prompt("dime la nota 2"))
//  let nota3 = Number(prompt("dime la nota 3"))
// let nota4 = Number(prompt("dime la nota 4"))
// let nota5 = Number(prompt("dime la nota 5"))


// notas.push(nota1, nota2, nota3, nota4, nota5)

// let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5


// console.log(`tu promedio es de:`  + promedio)




//cuanto costo el producto
//si el produicto cuesta menos de 100, le dan un aumento del 10% por el envio, si cuesta entre 100 y 200 tiene dcto del 10% pero si cuesta mas de 200 un 25% dcto


// let precio = Number(prompt("cuanto costo el producto?"))

// let dcto = precio * 0.10;
// let dcto1 = precio * 0.20;
// let dcto2 = precio * 0.25;

// let total = []

// if (precio < 100) {
//     total = precio + dcto

// } else if (precio >= 100 && precio <= 200) { total = precio - dcto1 }

// else{ total = precio - dcto2 }

// console.log (total)

// let operacion = prompt(`que operacion quieres hacer?
//     1. suma
//     2. resta
//     3. multiplicacion
//     4. division
//     `)

//     pregunta1 = Number(prompt(`digite primer valor`))

//     pregunta2 = Number(prompt(`digite segundo valor`))

// let resultado = []

//    if(operacion == "1")
//     {resultado= pregunta1+pregunta2}

//    else if(operacion == "2")
//     {resultado= pregunta1-pregunta2}

//     else if(operacion == "3")
//     {resultado= pregunta1*pregunta2}

//     else if(operacion == "4")
//     {resultado= pregunta1/pregunta2}


//     else{resultado = `operacion invalida`}

// console.log(resultado)


// let options = ["piedra", "papel", "tijera"];
// let azar = Math.floor(Math.random( ) *3);

// let computer= options[azar]

// let user = prompt("piedra, papel o tijera: ")

// let resultado = []

// if (user === computer) {
//   resultado = "Empate";
// } else if (
//   (user === "piedra" && computer === "tijera") ||
//   (user === "papel" && computer === "piedra") ||
//   (user === "tijera" && computer === "papel")
// ) {
//   resultado = "Ganaste";
// }

// else {
//   resultado = "perdiste";
// }

// console.log(resultado)


//for (bucle)

//let i; i<frutas.length; i++ // 


// let numeros = [1,3,4,6,9]
// let pares = []
// let impares = []

// for(i=0; i<numeros.length; i++){

//     if(numeros [i]  % 2 ===0){
//         pares.push(numeros[i])
// }
// else{
//   impares.push(numeros[i])
// }
// console.log('los pares son',  pares)
// console.log('los impares son', impares)

// }


// for(i=1; i<11; i++){

//     let num1 = Number(prompt(`dime un numero del 1 al 10 para hacer la tabla de multiplicación`))

//     let num2 = Number(prompt(`dime un numero del 1 al 10, para definir el rango`))


// if(tabla<1 || rango <1)
//     {console.log('los valores deben ser positivos')

//     }

// else if (tabla>10) 
// { 
//     console.log('la tabla debe ser de 1 a 10')
// }
// else { for(i=1; i<=rango; i++)}

//  console.log('$ {tabla} * $ [i] = ${i*tabla} ')
// }



let numeros = [3, 5, 6, 8, 23, 6, 4, 15];
let suma = 0;
let max = numeros[0];

for(let i=0; i<numeros.length; i++){
    suma += numeros[i];

      if(numeros[i] >max){
        max=numeros[i];
}

    }
    console.log("suma:", suma);
    console.log("max:", max);



    
