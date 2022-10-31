//Mi proyecto se trata de hacer el ecommerce de la web de productos que desarrolle en Desarrollo Web

let producto = parseInt(
    prompt(
        'Bienvenido a Porcelaneste, elegi la manualidad de tu gusto ingresando el numero de la categoria: 1 Centro de tortas $4500 // 2 Souvenires $550 // 3 Accesorios $100'
    )
)
let totalCompra = 0
let seguirComprando = true
let decision

//Agregar productos al carrito
while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 4500
    } else if (producto === 2) {
        totalCompra = totalCompra + 550
    } else if (producto === 3) {
        totalCompra = totalCompra + 100
    } else {
        producto = parseInt(prompt('Ingreso una opcion incorrecta. Elegi la manualidad de tu gusto ingresando el numero de la categoria: 1 Centro de tortas $4500 // 2 Souvenires $550 // 3 Accesorios $100'))
        continue
    }

    //Pregunta si continua comprando, si contesta 1, vuelve a ofrecer productos, sino continua a la seccion cuotas
    decision = parseInt(prompt('¿Continuar comprando? 1 Si // 2 No'))
    if (decision === 1) {
        producto = parseInt(
            prompt(
                'Elegi la manualidad de tu gusto ingresando el numero de la categoria: 1 Centro de tortas $4500 // 2 Souvenires $550 // 3 Accesorios $100'
            )
        )
    } else {
        seguirComprando = false
    }
}

//Pregunto si quiere pagar en cuotas o contado, sin ingresa 1, hace la funcion para calcular cuotas, si ingresa 2, informa el Total de la compra
let decisionCuotas

decisionCuotas = parseInt(prompt('¿Desea abonar en cuotas? 1 Si // 2 No'))
if (decisionCuotas === 1) {

    //Funcion para ingresar cuotas a pagar
    function cuotas1() {
        let cuotas1 = parseInt(prompt("¿En cuantas cuotas quiere pagar, elija entre 1 a 12 cuotas por mes"));
        return cuotas1
    }

    //Capturar resultado de la cantidad de cuotas seleccionadas
    let cuotas = cuotas1()

    //Mostrar resultado de funciones en console para control
    console.log("El total es: " + totalCompra)
    console.log("Las cuotas son:" + cuotas)

    //Dividir cantidad en cuotas
    function dividir(dato1, dato2) {
        let resultado = dato1 / dato2;
        return resultado
    }
    let division = dividir(totalCompra, cuotas)

    //Mostrar resultado en console y al usuario
    console.log("Usted debe pagar " + cuotas + " cuotas de " + division)
    alert("Usted debe pagar " + cuotas + " cuotas de $" + division)

} else {
    alert("Usted debe pagar $" + totalCompra + " al contado")
}
