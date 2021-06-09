window.onload = inicio;
let color;

function inicio() {
    document.formulario.prim.onkeypress = solodigitos;
    document.formulario.crear.onclick = creacionTejido;
    color = document.querySelector("#colorea");
    color.addEventListener("input", actualizarColor, false);
    color.addEventListener("change", actualizarColor, false);
    //	document.tincion.importar.onclick=importarpatronguardado;
}

function solodigitos(evento) {
    var evento = evento || window.event;
    var dato = String.fromCharCode(evento.charCode);
    if (dato < "0" || dato > "9")
        evento.preventDefault();
}

function actualizarColor(event) {

    color = event.target.value;

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
                console.log(contador + "este es el cont")
                columnas[col] = marcador;
                // console.log("contador" + contador);
                //console.log("columna" + col);
                //console.log("fila" + filas);
                if (col == contador) {
                    columnas[col] = marcarcolor;
                    console.log(col + "ab")
                }
                //  console.log(columnas);
            }

            contenedorTejido[filas] = columnas;
            // console.log("equi" + x)
        }
        mostrarTejido(total, contenedorTejido, color);
        console.log(contenedorTejido);

    } else if (arraysegun.length >= 2 && base != true) {
        const numDos = arraysegun;
        let mcdRecursivo;
        for (let j = 0; j < numDos.length - 1; j++) {
            mcdRecursivo = maximoComunDivisorRecursivo(numDos[j], numDos[j + 1]);
        }



        let total = parseInt((numDos.length * prim) / mcdRecursivo);



        contenedorTejido.length = total;
        let contador = total;
        let i = 0;
        for (let filas = 0; filas < contenedorTejido.length; filas++) {
            const columnas = new Array(contenedorTejido.length);

            if (i >= numDos.length) {
                i = 0;
                contador = salto(numDos[i], contador, total);
                i++;
            } else {
                contador = salto(numDos[i], contador, total);
                i++;
            }

            for (let col = 0; col <= columnas.length - 1; col++) {
                const marcador = '-';
                const marcarcolor = 1;
                columnas[col] = marcador;
                if (col == contador) {
                    columnas[col] = marcarcolor;
                }
            }
            contenedorTejido[filas] = columnas;

        }
        mostrarTejido(total, contenedorTejido, color);
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

function salto(salto, contador, total) {
    console.log(contador)
    contador = contador - salto;
    if (contador < 0) {
        contador = contador + total;
    }
    console.log(contador + " a")
    return contador;
}

function mostrarTejido(total, contenedorTejido, color) {
    console.log(color)

    let tamTot = 500;
    let tamaxrect = tamTot / total;
    let canvas = document.getElementById('tejido');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let y = tamTot - tamaxrect;
    let width = tamaxrect;
    let height = tamaxrect;
    ctx.clearRect(0, 0, tamTot, tamTot);

    for (let filas = 0; filas <= contenedorTejido.length - 1; filas++) {
        y = tamTot - tamaxrect;
        for (let col = contenedorTejido[filas].length - 1; col >= 0; col--) {
            ctx.strokeStyle = '#000000';
            ctx.strokeRect(x, y, width, height);
            if (contenedorTejido[filas][col] == 1) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, width, height);
            }
            y -= tamaxrect;

        }
        x += tamaxrect;

    }
}

const maximoComunDivisorRecursivo = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
};