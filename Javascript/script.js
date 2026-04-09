let palabras = ["casa", "perro", "gato", "arboles", "cielo", "mar", "so", "luna", "flor", "río"];

let contador = 0;
let larga= palabras[0]
let corta= palabras[0]



for (let i=0; i<palabras.length; i++){
 contador= palabras[i]
 palabras[i]= contador.length

console.log("la palabra", contador, "tiene", + contador.length, "letras")


 if (palabras[i].length > larga.length){
    larga = palabras[i];

 } if (palabras[i].length < corta.length){
    corta = palabras[i];}

   

}


 

 console.log("palabra mas larga es",  larga)

    console.log("la palabra mas corta es",  corta)





