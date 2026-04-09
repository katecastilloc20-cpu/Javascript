let palabras = ["casa", "perro", "gato", "arboles", "cielo", "mar", "so", "luna", "flor", "río"];

let larga= palabras[0]
let corta= palabras[0]
let palabras2 = 0


for (let i=0; i<palabras.length; i++){
 let len= palabras[i].length

console.log(`la palabra" ${palabras} "tiene" ${len} "letras`)


 if (palabras[i].length > larga.length){
    larga = palabras[i];

 } if (palabras[i].length < corta.length){
    corta = palabras[i];}

    palabras2.unshift(palabras[i]);
}

    console.log(larga)
    console.log(  corta)
    console.log(palabras2)




