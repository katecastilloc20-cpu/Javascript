const nombre = [ 
    {nombres:'juan', apellido:'perez', edad:35, altura:1.67, peso:56},
    {nombres:'maria', apellido:'torres', edad:23, altura:1.74, peso:77},
    {nombres:'luisa', apellido:'prieto', edad:48, altura:1.56, peso:83}
    
]

for (let i = 0; i < nombre.length; i ++) {
//    console.log (nombre[i])
// console.log(nombre[i].nombres)

console.log(nombre[i].nombres, calculateIMC (nombre[i].peso, nombre[i].altura))

}

//Definir IMC

// const altura = 54;
// const peso = 1.67


function calculateIMC (peso, altura){
    return (peso / altura **2);
}