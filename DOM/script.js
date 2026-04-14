let animales = [
  { nombre: "Gato", imagen: "https://placekitten.com/200/200" },
  { nombre: "Perro", imagen: "https://placedog.net/200/200" },
  { nombre: "León", imagen: "https://picsum.photos/200?random=1" },
  { nombre: "Tigre", imagen: "https://picsum.photos/200?random=2" },
  { nombre: "Elefante", imagen: "https://picsum.photos/200?random=3" },
  { nombre: "Jirafa", imagen: "https://picsum.photos/200?random=4" },
  { nombre: "Zebra", imagen: "https://picsum.photos/200?random=5" },
  { nombre: "Oso", imagen: "https://picsum.photos/200?random=6" },
  { nombre: "Conejo", imagen: "https://picsum.photos/200?random=7" },
  { nombre: "Panda", imagen: "https://picsum.photos/200?random=8" },
  { nombre: "Koala", imagen: "https://picsum.photos/200?random=9" },
  { nombre: "Canguro", imagen: "https://picsum.photos/200?random=10" },
  { nombre: "Lobo", imagen: "https://picsum.photos/200?random=11" },
  { nombre: "Zorro", imagen: "https://picsum.photos/200?random=12" },
  { nombre: "Mono", imagen: "https://picsum.photos/200?random=13" },
  { nombre: "Caballo", imagen: "https://picsum.photos/200?random=14" },
  { nombre: "Vaca", imagen: "https://picsum.photos/200?random=15" },
  { nombre: "Cerdo", imagen: "https://picsum.photos/200?random=16" },
  { nombre: "Gallina", imagen: "https://picsum.photos/200?random=17" },
  { nombre: "Pato", imagen: "https://picsum.photos/200?random=18" }
];


let litle = document.querySelector('h1')
let container = document.querySelector('section')

litle.textContent = 'animales';


//   <div class="card">

//    <div class="img">
//      <img src="./../bolso-charme-rafia-natural-negro-bolsos-mujer-online (1).jpg" alt="">
//    </div>
//      <p>Bolso</p>
        
//     </div>


for (let i = 0; i < animales.length; i++) {
    let nombre = animales[i].nombre;
    let imagen = animales[i].imagen

    container.innerHTML += `

    <div class="card">

<div class="img">
<img src="${imagen} " alt="">
 </div>
  <p>${nombre}</p>
        
</div>
    `
    
}