//  let nombre = prompt('cual es tu nombre');
//  let edad = Number(prompt('cual es tu edad'));
//  let correo = prompt('cual es tu correo');

//  console.log('Hola, tu nombre es', nombre, 'tu edad es', edad, 'y tu correo es', correo)





//  let precio = prompt('Pon tu precio');
//  let porcentaje = Number(prompt('de cuanto quieres tu descuento'));

//  let descuento = precio - ((precio * porcentaje )/ 100);

//  let precioFinal = precio - descuento;

//  console.log('tu precio final con el descuento es de' ,  precioFinal);




//  let kilometro = Number(prompt('dime que numero en km'));


//  let metro = (kilometro * 1000);
//  alert('tu conversion en metros es ' + metro);



// //convertidor a edad canina

//  let edad1 = Number(prompt('cuantos años tiene tu mascota'));
//  let convertidor = edad1 * 7
//  console.log('la edad canina de tu mascota es', convertidor);


// //convertidor de grados celcius a farenheit
//  let Celcius = Number(prompt('convierte de celcius a farenheit, dime el valor a convertir'));
//  let convertidor1 = (Celcius*9/5)+32;
//  console.log('tu conversion es de', convertidor1,'F');


// //convertidor de pesos a dolares

//  let pesos = Number(prompt('convertidor de pesos a dolares, dime el valor en pesos'));
//  let dolares = pesos * 0.00027;
//  console.log('tu valor en dolares es', dolares)

//  let dolares1 = Number(prompt('convertidor de dolares a pesos, dime el valor en dolares'));
//  let pesos1 = dolares1 * 4000;
//  console.log('tu valor en pesos es', pesos1);



// -//calcular area de un cuadrado
//  let lado = Number(prompt('dime el valor del cuadrado'));
//  let area1 = lado * lado;

//  alert('el area del cuadrado es de '+ area1);




// //calcular el perimetro de un cuadrado
//  let cuadrado = Number(prompt('di el valor del cuadrado'))
//  let perimetro = 4 * cuadrado
//  alert('el perimetro del cuadrado es de '+ perimetro)



// //convertidor de minutos a segundos
//  let minutos = Number (prompt('convertidor de minutos a segundos, dime los minutos'));
//  let segundos = minutos * 60;
//  alert('los segundos son: '+ segundos);

//   let segundos1 = Number (prompt('convertidor de segundos a minutos, dime los segundos'));
//  let minutos1 = segundos1 / 60;
//  alert('los segundos son: '+ minutos1);



// //area de un triangulo 
//  let base = Number(prompt('dime la base del triangulo '));
//  let altura = Number(prompt('dime la altura del triangulo '));
//  let area = (base*altura)/2;
//  alert('el area del triangulo es ' + area);


// //convertidor de milimetros a centimetros
//  let milimetros = Number(prompt('convertidos de ml a cm, dime los milimetros'));
//  let centimetros = milimetros / 10
//  alert('los centimetros son : ' + centimetros )

// let nombre = 'Juan';
// let edad = 33;
// let correo = 'juan@gmail.com'

// console.log('hola, tu nombre es:', nombre, 'y tu edad es', edad, 'y tu correo', correo);

// console.log(`Hola, tu nombre es ${nombre}, y tu edad es ${edad}`);


// let personas = Number(prompt(`cuantas personas son?`));
// let precio = Number(prompt(`cuanto costo la cena?`));
// let nombre = prompt(`quien comio más?`);


// let total = precio/(personas + 1);
// let total1 = total*2;
// let total2 = total;


// console.log(`${nombre} pagaria ${total1},y el resto tendrian que pagar ${total2} `);



// let personas = Number(prompt(`cuantas personas son?`));
// let precio = Number(prompt(`cuanto costo la cena?`));
// let nombre = prompt(`quien comio más?`);
// let nombre1 = prompt(`quien comio menos?`);

// let total = precio/(personas + 0.5);            
// let total1 = total* 2;                       
// let total3 = total / 2;                        

// let final = total + total3 / 2               
// console.log(`${nombre} pagaria ${total1}, ${nombre1} pagaria ${total3} y el resto tendrian que pagar ${total}`);


let cdt = Number(prompt(`cuanto piensa guardar en el cdt?`))
let tiempo = Number(prompt(`defina el tiempo en meses`))

let rendimiento = cdt * (0.10 / 12)

let meses = tiempo * rendimiento


console.log(`su ganancia sera de: ${meses}`)
