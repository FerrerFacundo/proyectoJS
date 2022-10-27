const ingresarNumero = () => {
    let x;
    x = parseInt(prompt(`Ingrese un valor positivo. Para finalizar, ingrese un valor negativo`));
    while (isNaN(x)) {
        x = parseInt(prompt(`No ingrese textos, sólo números. \n Ingrese un valor positivo. Para finalizar, ingrese un valor negativo`));
    }
    console.log(`número válido ${x}`);
    return x;
}

const resultados = (x, x2, n) => {
    console.log(`ingreso a resultados`);
    let promedio = x / n;
    let varianza = (x2 - n * promedio) / (n - 1);
    let desvioPromedio = (varianza / n) ** (1 / 2);
    let error = 2 * desvioPromedio;
    let ls = promedio + error;
    let li = promedio - error;
    alert(`Este es el resultado de la investigación. \n El valor medio de los datos es ${promedio}. \n La varianza de los datos es ${varianza}. \n El error de la investigación es de +-${error}. \n Con una confianza del 95%, se puede decir que el parámetro poblacional se encuentra entre ${li} y ${ls}`);
}

const otroAnalisis = () => {
    let x;
    x = prompt(`¿Desea realizar otro estudio? Ingrese SI o NO`);
    if (x != null) { x = x.toLowerCase(); }
    console.log(x); //// TIENE PROBLEMA CUANDO EL USUARIO COLOCA CANCELAR
    while (!(x === 'si' || x === 'no')) {
        x = prompt(`No ingresó una respuesta válida. \n ¿Desea realizar otro estudio? Ingrese SI o NO`);
        if (x != null) { x = x.toLowerCase(); }
        console.log(x);
    }
    console.log(`respuesta válida ${x}`);
    if (x === 'si') {
        return true;
    } else {
        return false;
    }
}


let numero, suma = 0, sumaCuadrado = 0, n = 0, neg = false, otro = true;

alert(`Este programa es un asistente de muestreo. \n Eres un investigador que salió a hacer una encuesta. La única pregunta de tu encuesta es "¿Cuántas horas semanales haces ejercicio?". A continuación, debes ingresar los valores. \n BG`);
do {
    suma = 0;
    sumaCuadrado = 0;
    n = 0;
    neg = false;
    otro = false;
    do {
        numero = ingresarNumero();
        if (numero >= 0) {
            suma = suma + numero;
            sumaCuadrado = sumaCuadrado + numero ** 2;
            n++;
        } else {
            neg = true;
        }
    } while (neg === false);

    console.log(`Resultados ${suma}; ${sumaCuadrado}; ${n}`);
    if (n >= 2) {
        resultados(suma, sumaCuadrado, n);
    } else {
        alert(`Ingresó menos de 3 valores válidos. \nLamentablemente, no es posible hacer el análisis con tan pocos elementos ingresados.`);
    }
    otro = otroAnalisis();
} while (otro);
alert(`¡Gracias por utilizar nuestra calculadora de muestreo! \n BG`);