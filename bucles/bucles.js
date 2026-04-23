const nombre = [
    { nombres: 'juan', apellido: 'perez', edad: 35, altura: 1.67, peso: 56 },
    { nombres: 'maria', apellido: 'torres', edad: 23, altura: 1.74, peso: 77 },
    { nombres: 'luisa', apellido: 'prieto', edad: 48, altura: 1.56, peso: 83 }
]
calcularImc (56, 1.67)

function calcularImc (weight, height){
    return weight/ height** 2;
}

    function diagnosticar( imc ) {
    if( imc < 0 ) {
        throw new Error( `El imc ingresado de ${ imc } no es valido` );
        // console.error( `El imc ingresado de ${ imc } no es valido` );
    }
    else if( imc < 18.5 ) {
        console.log( 'Peso inferior al normal' );
    }
    else if ( imc < 24.9 ) {
        console.log( 'Normal' );
    }
    else if ( imc < 29.9 ) {
        console.log( 'Peso superior al normal' );
    }
    else {
        console.log( 'Obesidad' );
    }
}