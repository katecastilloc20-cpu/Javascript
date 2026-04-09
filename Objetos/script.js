let estudiantes = [
  {
    nombre: "Ana",
    apellido: "García",
    notaFinal: 4.5
  },
  {
    nombre: "Luis",
    apellido: "Martínez",
    notaFinal: 3.8
  },
  {
    nombre: "Camila",
    apellido: "Rodríguez",
    notaFinal: 4.9
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    notaFinal: 2.7
  },
  {
    nombre: "Sofía",
    apellido: "López",
    notaFinal: 3.5
  },
  {
    nombre: "Diego",
    apellido: "Hernández",
    notaFinal: 4.2
  }
];


for(let i=0; i < estudiantes.length; i++){

let nombre = estudiantes[i].nombre
let nota = estudiantes[i].notaFinal

 if(estudiantes[i].notaFinal < 3){
console.log( `el estudiante ${nombre} saco la nota de ${nota} y perdio`)
 }
  else if(estudiantes[i].notaFinal > 4){
    console.log (`el estudiante ${nombre} saco la nota de ${nota} y paso`)}

 else {
    console.log (`el estudiante ${nombre} saco la nota de ${nota} y nivela`)} 

}

