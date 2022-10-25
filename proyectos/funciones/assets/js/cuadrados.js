var fondo = '';
    document.addEventListener('keydown', function (letra) {
        if (letra.key === 'a' || letra.key === 'A') {
           fondo = 'blue' 
        } else if (letra.key === 's'|| letra.key === 'S') {
            fondo = 'red' 
        } else if (letra.key === 'd' || letra.key === 'D') {
            fondo = 'gray'
        } else if (letra.key === 'f' || letra.key === 'F') {
             fondo = 'green'
        } else{
            fondo = ''
        }
    })


    let primerColor = document.querySelector('#cuadrado1')
    let segundoColor = document.querySelector('#cuadrado2')
    let tercerColor = document.querySelector('#cuadrado3')
    let cuartoColor = document.querySelector('#cuadrado4')

    primerColor.addEventListener("click", function () { primerColor.style.backgroundColor = fondo });
    segundoColor.addEventListener("click", function () { segundoColor.style.backgroundColor = fondo });
    tercerColor.addEventListener("click", function () { tercerColor.style.backgroundColor = fondo });
    cuartoColor.addEventListener("click", function () { cuartoColor.style.backgroundColor = fondo })

    