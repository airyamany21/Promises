let eleccion = ['resolve', 'reject'];
let random;

let finalizarServicio = function (id, callback) {
    callback('Servicio ' + id + ' terminado');
}

let servicio = function (id, tiempo) {
    // random = Math.floor(Math.random() * 5);

    console.log("Servicio", id, "haciendo cosas");
    return new Promise((resolve, reject) => {
        // if ('resolve' == eleccion[random]) {
            setTimeout(finalizarServicio, tiempo, id, resolve);
        // } else {
        //     setTimeout(finalizarServicio, tiempo, id, reject);

        // }

    });
}
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await
async function invocaServicios() {
    let resultado = await servicio(1, 100);
    console.log(resultado);
    resultado = await servicio(2, 500);
    console.log(resultado);
    resultado = await servicio(3, 1500);
    console.log(resultado);
    resultado = await servicio(4, 700);
    console.log(resultado);
}
invocaServicios();

servicio(1, 1000)
    .then(r => {
        console.log(r);
        return servicio(2, 500);
    })
    .then(r => {
        console.log(r);
        return servicio(3, 1500);
    })
    .then(r => {
        console.log(r);
        return servicio(4, 700);
    })

    .then(r => {
        console.log(r);
        console.log("programa terminado");
    }).catch(r => {

        console.log(r);
        console.log("No se cumplio");
    });