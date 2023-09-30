const dom = document;
let validaciones = {};
//FUNCIONES HANDLERS
//↓Span de error
let mensajeHandler = (mensajeErr, caracteristica = "", nombrePara = null, noVacio) => {
    if (noVacio) {
        mensajeErr.textContent = `El parametro ${nombrePara} debe cumplir con el ${caracteristica} especificado`;
    }
    else {
        mensajeErr.textContent = "";// En caso de que este vacio se vacía su contenido desde aqui
    }
}
let inputHandler = (inputSelec, patron) => {
    //Esta función se dispara cuando ya tienes un input seleccionado, así que los valores dependeran del input en el que estes escribiendo  
    let mensajeError = dom.getElementById(inputSelec.name);
    let formatoEspecificado = new RegExp(patron, "g");
    let cadenaActual = inputSelec.value;
    let tamanoActual = cadenaActual.length;
    let tamanoReq = inputSelec.dataset.tam;
    let nombreInput = inputSelec.name;
    //let FLAG = inputSelec.name USAR ESTA FLAG PARA RESOLVER PROBLEMA 


    if (tamanoActual != tamanoReq) {

        // ↓Span de error
        mensajeHandler(mensajeError, "TAMAÑO", nombreInput, Boolean(tamanoActual));
        //validaciones[`${nombreInput}`]=false;
    }
    else {
        let esValido = formatoEspecificado.test(cadenaActual);//la validacion se hace desde fuera del mensajeHandler, con el inputHandler
        if (!esValido) {
            mensajeHandler(mensajeError, "FORMATO", nombreInput, true);
            //validaciones[`${nombreInput}`]=false;
        }
        else {
            mensajeHandler(mensajeError, null, null, false)
            //retorna la evaluacion del input seleccionado cuando sea true pues el default sera false
            validaciones[`${nombreInput}`] = true;//que se cree la variable on the fly y que no se cree todo cada vez que se ejecute la funcion
            console.log("Retorna:", validaciones);
            //return validaciones;//solo se retorna cuando es verdadero, mietnras es null y por tento evalua a a falso
        }
    }


}
function validarFormulario() {


    //const formulario = dom.querySelector("#formulario");
    const inputs = dom.querySelectorAll("#formulario [required]");// EL QUERY SELECTOR ES PARA USAR SELECTORES DE CSS

    inputs.forEach(input => {//AGREGAMOS UN SPAN POR CADA ELEMENTO EN EL ARRAY
        let mensajeError = dom.createElement("span");
        mensajeError.id = input.name;
        // mensajeError.classList.add("no-active");
        input.insertAdjacentElement("afterend", mensajeError);
    })

    dom.addEventListener("keyup", listenerGral => {
        //console.log("lsitenerGral" + listenerGral);
        if (listenerGral.target.matches("#formulario [required]")) {
            let inputSeleccionado = listenerGral.target;//SELECCIONAMOS EL INPUT QUE TENGA REQUIRED COMO ATRIBUTO HTML, FORMULARIO COMO ID Y QUE TENGA EL EVENTO KEYUP
            let validData = [];
            if (inputSeleccionado.name === "identificador") {//INPUT CUYO NOMBRE SEA IDENTIFICADOR

                inputHandler(inputSeleccionado, '^[A-Z]{4}\\d{6}2\\d{2}$');

                // let idValido = inputHandler(inputSeleccionado, '^[A-Z]{4}\\d{6}2\\d{2}$');

                // validData += idValido;
                // console.log("id valido: ",inputHandler(inputSeleccionado,'^[A-Z]{4}\\d{6}2\\d{2}$'));
            }
            if (inputSeleccionado.name === "contraseña") {

                inputHandler(inputSeleccionado, '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8}$');

                // let passValida = inputHandler(inputSeleccionado, '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8}$');
                // validData += passValida;
            }
            // return validData;

        }
    })

}
//validarFormulario(); esto es lo que lo requeria como modulo












