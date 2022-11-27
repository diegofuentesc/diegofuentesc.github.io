
const resultado = document.querySelector("#resultado");
const btnBuscar = document.querySelector("#btnBuscar");

//Boton Buscar

btnBuscar.addEventListener('click', async function () {
    
    const inputValor = document.querySelector("#inputValor").value;
    if(inputValor == ''){
        alert('ingresa valor');
    }else{

    let chart = '';
    const tipoCambio = document.querySelector("#tipoCambio").value.split('-');
    const calcular = inputValor / tipoCambio[1];
    resultado.innerHTML = calcular.toFixed(5);

    const codigo = tipoCambio[0];
    const fechaActual = new Date();
    //const fechaActual = new Date().toLocaleDateString();
    let fechas = [];
    let valores = [];
    let ultimoValor = 0;
    for (i = 10; i > 0; i--) {

        const dia = fechaActual.getDate() - i;
        const mes = fechaActual.getMonth() + 1;
        const ano = fechaActual.getFullYear();

        const fechaFormateada = `${dia}-${mes}-${ano}`;

        const dataHistorica = await getFechas(codigo, fechaFormateada);

        fechas.push(fechaFormateada);
        if (dataHistorica.serie.length > 0) {
            valores.push(dataHistorica.serie[0].valor);
        } else {

            valores.push(ultimoValor);

        }
    }

    
    construyeGrafico(fechas, valores);
    

}
});



//conecto con la api
async function getconversor() {
    const res = await fetch("https://mindicador.cl/api/")
    const data = await res.json()
    return data;

}

//conecto con api para obtener informacion de monedas x fecha
async function getFechas(moneda, fecha) {
    const res = await fetch(`https://mindicador.cl/api/${moneda}/${fecha}`)
    const data = await res.json()
    return data;
}

//completo el selector con la opcion de 
async function completaSelector() {
    const data = await getconversor(); //llamada api
    const cambios = (Object.keys(data)); //como no es un arreglo, coloco el Object.keys ya que es un objeto.

    let selector = "";


    cambios.forEach((cambio) => {
        const mCambio = data[cambio];
        if (mCambio.unidad_medida == 'Pesos') {
            selector += `<option value="${mCambio.codigo}-${mCambio.valor}" id="${mCambio.codigo}">${mCambio.nombre}</option>`;

        }

    });

    tipoCambio.innerHTML = selector;


}


completaSelector();

//Funcion que construye grafico

async function construyeGrafico(fechas, valores) {
    
    const ctx = document.querySelector('#myChart').getContext('2d');
    const data = {
        labels: fechas,
        datasets: [{
            label: 'Grafico',
            data: valores,
            fill: false,
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'white',
            pointBackgroundColor: "white",
            borderColor: 'red',
            tension: 0.1
        }]
    };

        chart = new Chart(ctx, {
            type: 'line',
            data: data,});
}






/*async function construyeGrafico(fechas, valores) {
    
    const ctx = document.querySelector('#myChart');
    const data = {
        labels: fechas,
        datasets: [{
            label: 'Grafico',
            data: valores,
            fill: false,
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'white',
            pointBackgroundColor: "white",
            borderColor: 'red',
            tension: 0.1
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: data,
    });

}*/











