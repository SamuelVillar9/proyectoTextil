window.onload = inicio;

function inicio() {
    document.formulario.prim.onkeypress = solodigitos;
    document.formulario.crear.onclick = creacionTejido;
    //	document.tincion.importar.onclick=importarpatronguardado;
}

function solodigitos(evento) {
    var evento = evento || window.event;
    var dato = String.fromCharCode(evento.charCode);
    if (dato < "0" || dato > "9")
        evento.preventDefault();
}

function creacionTejido() {
    let prim = parseInt(document.formulario.prim.value);
    let cuadsegun = document.formulario.segun.value;
    let arraysegun = new Array();
    let base;
    arraysegun = separarMovim(cuadsegun);
    let contenedorTejido = new Array();
    console.log(arraysegun)
    if (arraysegun.length == 1 && base != true) {
        const numDos = parseInt(arraysegun);
        let total = (numDos + prim);

        contenedorTejido.length = total;
        let contador = total;


        for (let filas = 0; filas < contenedorTejido.length; filas++) {
            const columnas = new Array(contenedorTejido.length);
            contador = salto(numDos, contador, total);

            for (let col = 0; col <= columnas.length - 1; col++) {
                const marcador = '-';
                const marcarcolor = 1;

                // console.log("contador" + contador);
                //console.log("columna" + col);
                //console.log("fila" + filas);
                if (col != contador - 1) {
                    columnas[col] = marcador;
                } else if (col == contador - 1) {
                    columnas[col] = marcarcolor;
                }

                //  console.log(columnas);

            }


            contenedorTejido[filas] = columnas;
            // console.log("equi" + x)
        }
        mostrarTejido(total, contenedorTejido)
        console.log(contenedorTejido);

    } else if (arraysegun.length >= 2 && base != true) {
        const numDos = arraysegun;

        let total = (numDos.length * prim) / 2 /*MCD(numDos)*/ ;

        console.log(total);
        contenedorTejido.length = total;
        let contador = total;
        let i = 0;
        for (let filas = 0; filas < contenedorTejido.length; filas++) {
            const columnas = new Array(contenedorTejido.length);


            if (i > numDos.length - 1) {

                i = 0;
                contador = salto(numDos[i], contador, total);
            } else {
                contador = salto(numDos[i], contador, total);
                i++;
            }

            console.log(contador);
            for (let col = 0; col <= columnas.length - 1; col++) {
                const marcador = '-';
                const marcarcolor = 1;

                if (col != contador) {
                    columnas[col] = marcador;
                } else if (col == contador) {
                    columnas[col] = marcarcolor;
                }
            }
            contenedorTejido[filas] = columnas;

        }
        mostrarTejido(total, contenedorTejido);
        console.log(contenedorTejido);


    } else if (base == true) {
        alert("base");
    } else {
        alert("No has introducido nada")
    }


}

function separarMovim(numero) {
    let dividir = numero.split(',');
    return dividir;
}

function MCD() {
    if (arguments.length < 2) return false;
    if (arguments.length == 2) return (arguments[1] == 0 ? arguments[0] : MCD(arguments[1], arguments[0] % arguments[1]));
    var arr = [].splice.call(arguments, 0);
    arr.splice(0, 2, MCD(arr[0], arr[1]));
    return MCD.apply(window, arr);
}

function salto(salto, contador, total) {

    do {

        if (contador < 0) {
            contador = contador + total;
        } else {
            contador = contador - salto;
        }
    } while (contador <= 0);
    return contador;
}

function mostrarTejido(total, contenedorTejido) {
    let tamTot = 500;
    let tamaxrect = tamTot / total;
    let canvas = document.getElementById('tejido');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let y = tamTot - tamaxrect;
    let width = tamaxrect;
    let height = tamaxrect;
    ctx.clearRect(0, 0, tamTot, tamTot);

    for (let filas = 0; filas < contenedorTejido.length; filas++) {
        x = 0;
        for (let col = contenedorTejido[filas].length - 1; col >= 0; col--) {
            if (contenedorTejido[filas][col] != 1) {

                ctx.strokeStyle = '#000000';
                ctx.strokeRect(x, y, width, height);
            } else if (contenedorTejido[filas][col] == 1) {
                ctx.fillStyle = '#E82020';
                ctx.fillRect(x, y, width, height);
            }

            x += tamaxrect;
        }
        y -= tamaxrect;

    }
}